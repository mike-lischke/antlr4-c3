//
//  CodeCompletionCore.hpp
//
//  C++ port of antlr4-c3 (TypeScript) by Mike Lischke
//  Licensed under the MIT License.
//

#ifndef CodeCompletionCore_hpp
#define CodeCompletionCore_hpp

#include <Parser.h>
#include <ParserRuleContext.h>
#include <Token.h>
#include <atn/ATNState.h>
#include <atn/PredicateTransition.h>
#include <atn/RuleStartState.h>
#include <atn/Transition.h>
#include <misc/IntervalSet.h>

#include <atomic>
#include <chrono>
#include <cstddef>
#include <map>
#include <string>
#include <typeindex>
#include <unordered_set>
#include <vector>

// ----------------------------------------------------------------------------
// Supporting Types
// ----------------------------------------------------------------------------

namespace c3 {

using TokenList = std::vector<size_t>;
using RuleList = std::vector<size_t>;

struct RuleWithStartToken {
  size_t startTokenIndex;
  size_t ruleIndex;
};

using RuleWithStartTokenList = std::vector<RuleWithStartToken>;

/**
 * A record for a follow set along with the path at which this set was found.
 * If there is only a single symbol in the interval set then we also collect and
 * store tokens which follow this symbol directly in its rule (i.e. there is no
 * intermediate rule transition). Only single label transitions are considered.
 * This is useful if you have a chain of tokens which can be suggested as a
 * whole, because there is a fixed sequence in the grammar.
 */
struct FollowSetWithPath {
  antlr4::misc::IntervalSet intervals;
  RuleList path;
  TokenList following;
};

/**
 * A list of follow sets (for a given state number) + all of them combined for
 * quick hit tests + whether they are exhaustive (false if subsequent
 * yet-unprocessed rules could add further tokens to the follow set, true
 * otherwise). This data is static in nature (because the used ATN states are
 * part of a static struct: the ATN). Hence it can be shared between all C3
 * instances, however it depends on the actual parser class (type).
 */
struct FollowSetsHolder {
  std::vector<FollowSetWithPath> sets;
  antlr4::misc::IntervalSet combined;
  bool isExhaustive;
};

using FollowSetsPerState = std::map<size_t, FollowSetsHolder>;

/** Token stream position info after a rule was processed. */
using RuleEndStatus = std::unordered_set<size_t>;

struct PipelineEntry {
  antlr4::atn::ATNState* state;
  size_t tokenListIndex;
};

// ----------------------------------------------------------------------------
// CandidatesCollection
// ----------------------------------------------------------------------------

struct CandidateRule {
  size_t startTokenIndex;
  RuleList ruleList;
};

/**
 * All the candidates which have been found. Tokens and rules are separated.
 * – Token entries include a list of tokens that directly follow them (see also
 * the "following" member in the FollowSetWithPath class). – Rule entries
 * include the index of the starting token within the evaluated rule, along with
 * a call stack of rules found during evaluation. – cancelled will be true if
 * the collectCandidates() was cancelled or timed out.
 */
struct CandidatesCollection {
  std::map<size_t, TokenList> tokens;
  std::map<size_t, CandidateRule> rules;
  bool cancelled;
};

// ----------------------------------------------------------------------------
// Code Completion Core
// ----------------------------------------------------------------------------

class CodeCompletionCore {
public:
  // --------------------------------------------------------
  // Construction
  // --------------------------------------------------------

  explicit CodeCompletionCore(antlr4::Parser* parser);

  // --------------------------------------------------------
  // Configuration
  // --------------------------------------------------------

  /**
   * Tailoring of the result:
   * Tokens which should not appear in the candidates set.
   */
  std::unordered_set<size_t> ignoredTokens;  // NOLINT: public field

  /**
   * Rules which replace any candidate token they contain.
   * This allows to return descriptive rules (e.g. className, instead of
   * ID/identifier).
   */
  std::unordered_set<size_t> preferredRules;  // NOLINT: public field

  /**
   * Specify if preferred rules should translated top-down (higher index rule
   * returns first) or bottom-up (lower index rule returns first).
   */
  bool translateRulesTopDown = false;  // NOLINT: public field

  // --------------------------------------------------------
  // Debugging Options
  // --------------------------------------------------------
  // Print human readable ATN state and other info.

  /** Not dependent on showDebugOutput. Prints the collected rules + tokens to
   * terminal. */
  bool showResult = false;  // NOLINT: public field

  /** Enables printing ATN state info to terminal. */
  bool showDebugOutput = false;  // NOLINT: public field

  /** Only relevant when showDebugOutput is true. Enables transition printing
   * for a state. */
  bool debugOutputWithTransitions = false;  // NOLINT: public field

  /** Also depends on showDebugOutput. Enables call stack printing for each rule
   * recursion. */
  bool showRuleStack = false;  // NOLINT: public field

  // --------------------------------------------------------
  // Usage
  // --------------------------------------------------------

  /**
   * This is the main entry point. The caret token index specifies the token
   * stream index for the token which currently covers the caret (or any other
   * position you want to get code completion candidates for). Optionally you
   * can pass in a parser rule context which limits the ATN walk to only that or
   * called rules. This can significantly speed up the retrieval process but
   * might miss some candidates (if they are outside of the given context).
   *
   * @param caretTokenIndex The index of the token at the caret position.
   * @param context An option parser rule context to limit the search space.
   * @param timeoutMS If non-zero, the number of milliseconds until collecting
   * times out.
   * @param cancel If set to a non-NULL atomic boolean, and that boolean value
   * is set to true while the function is executing, then collecting candidates
   * will abort as soon as possible.
   * @returns The collection of completion candidates. If cancelled or timed
   * out, the returned collection will have its 'cancelled' value set to true
   * and the collected candidates may be incomplete.
   */
  CandidatesCollection collectCandidates(
      size_t caretTokenIndex, antlr4::ParserRuleContext* context = nullptr,
      size_t timeoutMS = 0, std::atomic<bool>* cancel = nullptr
  );

  // --------------------------------------------------------
  // Private
  // --------------------------------------------------------
private:
  static std::map<std::type_index, FollowSetsPerState> followSetsByATN;
  static std::vector<std::string> atnStateTypeMap;

  antlr4::Parser* parser;
  antlr4::atn::ATN const& atn;                // NOLINT: reference field
  antlr4::dfa::Vocabulary const& vocabulary;  // NOLINT: reference field
  std::vector<std::string> const& ruleNames;  // NOLINT: reference field
  std::vector<antlr4::Token*> tokens;
  std::vector<int> precedenceStack;

  size_t tokenStartIndex = 0;
  size_t statesProcessed = 0;

  /**
   * A mapping of rule index + token stream position to end token positions.
   * A rule which has been visited before with the same input position will
   * always produce the same output positions.
   */
  std::map<size_t, std::map<size_t, RuleEndStatus>> shortcutMap;

  /** The collected candidates (rules and tokens). */
  c3::CandidatesCollection candidates;
  size_t timeoutMS;
  std::atomic<bool>* cancel;
  std::chrono::steady_clock::time_point timeoutStart;

  bool checkPredicate(const antlr4::atn::PredicateTransition* transition);

  bool translateStackToRuleIndex(
      RuleWithStartTokenList const& ruleWithStartTokenList
  );

  bool translateToRuleIndex(
      size_t index, RuleWithStartTokenList const& ruleWithStartTokenList
  );

  std::vector<size_t> getFollowingTokens(
      const antlr4::atn::Transition* transition
  ) const;

  FollowSetsHolder determineFollowSets(
      antlr4::atn::ATNState* start, antlr4::atn::ATNState* stop
  );

  bool collectFollowSets(
      antlr4::atn::ATNState* state, antlr4::atn::ATNState* stopState,
      std::vector<FollowSetWithPath>& followSets,
      std::vector<antlr4::atn::ATNState*>& stateStack,
      std::vector<size_t>& ruleStack
  );

  RuleEndStatus processRule(
      antlr4::atn::RuleStartState* startState, size_t tokenListIndex,
      RuleWithStartTokenList& callStack, int precedence, size_t indentation,
      bool& timedOut
  );

  std::string generateBaseDescription(antlr4::atn::ATNState* state);

  void printDescription(
      size_t indentation, antlr4::atn::ATNState* state,
      std::string const& baseDescription, size_t tokenIndex
  );

  void printRuleState(RuleWithStartTokenList const& stack);
};

}  // namespace c3

#endif /* CodeCompletionCore_hpp */
