//
//  CodeCompletionCore.cpp
//
//  C++ port of antlr4-c3 (TypeScript) by Mike Lischke 
//  Licensed under the MIT License.
// 

#include "CodeCompletionCore.hpp"
using namespace antlr4;
using namespace std;


namespace c3 {

// ----------------------------------------------------------------------------
// MARK: - Utilities
// ----------------------------------------------------------------------------

static std::vector<size_t> longestCommonPrefix(std::vector<size_t> a, std::vector<size_t> b)
{
	size_t i = 0;
	for (; i < std::min(a.size(), b.size()); i++) {
		if (a[i] != b[i]) {
			break;
		}
	}
	
	return std::vector<size_t>(a.begin(), a.begin() + i);
}




// ----------------------------------------------------------------------------
// MARK: - Static
// ----------------------------------------------------------------------------

std::map<std::type_index, FollowSetsPerState> c3::CodeCompletionCore::followSetsByATN = {};

// Matches ATNStateType enum
std::vector<std::string> c3::CodeCompletionCore::atnStateTypeMap = {
	"invalid",
	"basic",
	"rule start",
	"block start",
	"plus block start",
	"star block start",
	"token start",
	"rule stop",
	"block end",
	"star loop back",
	"star loop entry",
	"plus loop back",
	"loop end",
};



// ----------------------------------------------------------------------------
// MARK: - Construction
// ----------------------------------------------------------------------------

CodeCompletionCore::CodeCompletionCore(antlr4::Parser * parser)
: parser(parser), atn(parser->getATN()), vocabulary(parser->getVocabulary()), ruleNames(parser->getRuleNames())
{
	
}





// ----------------------------------------------------------------------------
// MARK: - Collecting
// ----------------------------------------------------------------------------

CandidatesCollection CodeCompletionCore::collectCandidates(size_t caretTokenIndex, antlr4::ParserRuleContext *context)
{
	shortcutMap.clear();
	candidates.rules.clear();
	candidates.tokens.clear();
	statesProcessed = 0;
	precedenceStack = {};
	
	tokenStartIndex = context ? context->start->getTokenIndex() : 0;
	const auto tokenStream = parser->getTokenStream();
	
	tokens = {};
	size_t offset = tokenStartIndex;
	while (true) {
		antlr4::Token * token = tokenStream->get(offset++);
		if (token->getChannel() == Token::DEFAULT_CHANNEL) {
			tokens.push_back(token);
			
			if (token->getTokenIndex() >= caretTokenIndex || token->getType() == Token::EOF) {
				break;
			}
		}
		
		// Do not check for the token index here, as we want to end with the first unhidden token on or after
		// the caret.
		if (token->getType() == Token::EOF) {
			break;
		}
	}
	
	RuleWithStartTokenList callStack = {};
	size_t startRule = context ? context->getRuleIndex() : 0;
	processRule(atn.ruleToStartState[startRule], 0, callStack, 0, 0);
	
	if (showResult) {
		std::cout << "States processed: " << std::to_string(statesProcessed) << "\n\n";
		
		std::cout << "Collected rules:\n";
		for (const auto & [tokenIndex, rule] : candidates.rules) {
			std::cout << ruleNames[tokenIndex];
			std::cout << ", path: ";
			
			for (size_t token: rule.ruleList) {
				std::cout << ruleNames[token] + " ";
			}
		}
		std::cout << "\n\n";
		
		std::set<std::string> sortedTokens;
		for (auto entry: candidates.tokens) {
			size_t token = entry.first;
			std::vector<size_t> tokenList = entry.second;
			
			std::string value = vocabulary.getDisplayName(token);
			for (size_t following: tokenList) {
				value += " " + vocabulary.getDisplayName(following);
			}
			
			sortedTokens.insert(value);
		}
		
		std::cout << "Collected tokens:\n";
		for (std::string symbol: sortedTokens) {
			std::cout << symbol;
		}
		std::cout << "\n\n";
	}
	
	return candidates;
}



/**
 * Checks if the predicate associated with the given transition evaluates to true.
 *
 * @param transition The transition to check.
 * @returns the evaluation result of the predicate.
 */
bool CodeCompletionCore::checkPredicate(const antlr4::atn::PredicateTransition * transition)
{
	return transition->getPredicate()->eval(parser, &ParserRuleContext::EMPTY);
}



/**
 * Walks the rule chain upwards or downwards (depending on translateRulesTopDown) to see if that matches any of the
 * preferred rules. If found, that rule is added to the collection candidates and true is returned.
 *
 * @param ruleWithStartTokenList The list to convert.
 * @returns true if any of the stack entries was converted.
 */
bool CodeCompletionCore::translateStackToRuleIndex(RuleWithStartTokenList const& ruleWithStartTokenList)
{
	if (preferredRules.size() == 0) {
		return false;
	}
	
	// Change the direction we iterate over the rule stack
	if (translateRulesTopDown) {
		// Loop over the rule stack from lowest to highest rule level. This will prioritize a lower preferred rule
		// if it is a child of a higher one that is also a preferred rule.
		for (size_t i = ruleWithStartTokenList.size() - 1; i >= 0; i--) {
			if (translateToRuleIndex(i, ruleWithStartTokenList)) {
				return true;
			}
		}
	} else {
		// Loop over the rule stack from highest to lowest rule level. This will prioritize a higher preferred rule
		// if it contains a lower one that is also a preferred rule.
		for (size_t i = 0; i < ruleWithStartTokenList.size(); i++) {
			if (translateToRuleIndex(i, ruleWithStartTokenList)) {
				return true;
			}
		}
	}
	
	return false;
}



/**
 * Given the index of a rule from a rule chain, check if that matches any of the preferred rules. If it matches,
 * that rule is added to the collection candidates and true is returned.
 *
 * @param i The rule index.
 * @param ruleWithStartTokenList The list to check.
 * @returns true if the specified rule is in the list of preferred rules.
 */
bool CodeCompletionCore::translateToRuleIndex(size_t i, RuleWithStartTokenList const& ruleWithStartTokenList)
{
	RuleWithStartToken rwst = ruleWithStartTokenList[i];
	
	if (preferredRules.contains(rwst.ruleIndex)) {
	
		// Add the rule to our candidates list along with the current rule path,
		// but only if there isn't already an entry like that.
		std::vector<size_t> path;
		{
			for (size_t subrangeIndex = 0; subrangeIndex < i; subrangeIndex++) {
				path.push_back(ruleWithStartTokenList[subrangeIndex].ruleIndex);
			}
		}
		
		
		bool addNew = true;
		
		for (auto const& [cRuleEntryRuleIndex, cRuleEntryCandidateRule]: candidates.rules) {
			if (cRuleEntryRuleIndex != rwst.ruleIndex || cRuleEntryCandidateRule.ruleList.size() != path.size()) {
				continue;
			}
			
			// Found an entry for this rule. Same path? 
			bool samePath = true;
			for (size_t pathI = 0; pathI < path.size(); pathI++) {
				if (path[pathI] == cRuleEntryCandidateRule.ruleList[pathI]) {
					samePath = false;
					break;
				}
			}
			
			// If same path, then don't add a new (duplicate) entry.
			if (samePath) {
				addNew = false;
				break;
			}
		}
		
		if (addNew) {
			candidates.rules[rwst.ruleIndex] = {
				.startTokenIndex = rwst.startTokenIndex,
				.ruleList = path
			};
			if (showDebugOutput) {
				std::cout << "=====> collected: " << ruleNames[rwst.ruleIndex] << "\n";
			}
		}
		
		return true;
	}
	
	return false;
}



/**
 * This method follows the given transition and collects all symbols within the same rule that directly follow it
 * without intermediate transitions to other rules and only if there is a single symbol for a transition.
 *
 * @param transition The transition from which to start.
 * @returns A list of toke types.
 */
std::vector<size_t> CodeCompletionCore::getFollowingTokens(const antlr4::atn::Transition * transition)
{
	std::vector<size_t> result = {};
	
	std::vector<antlr4::atn::ATNState*> pipeline = { transition->target };
	
	while (pipeline.size() > 0) {
		antlr4::atn::ATNState * state = pipeline.back();
		pipeline.pop_back();
		
		if (state) {
			for (antlr4::atn::ConstTransitionPtr& outgoing: state->transitions) {
				if (outgoing->getTransitionType() == antlr4::atn::TransitionType::ATOM) {
					if (!outgoing->isEpsilon()) {
						std::vector<ssize_t> list = outgoing->label().toList();
						if (list.size() == 1 && !ignoredTokens.contains(list[0])) {
							result.push_back(list[0]);
							pipeline.push_back(outgoing->target);
						}
					} else {
						pipeline.push_back(outgoing->target);
					}
				}
			}
		}
	}
	
	return result;
}



/**
 * Entry point for the recursive follow set collection function.
 *
 * @param start Start state.
 * @param stop Stop state.
 * @returns Follow sets.
 */
FollowSetsHolder CodeCompletionCore::determineFollowSets(antlr4::atn::ATNState * start, antlr4::atn::ATNState * stop)
{
	std::vector<FollowSetWithPath> sets = {};
	std::vector<antlr4::atn::ATNState*> stateStack = {};
	std::vector<size_t> ruleStack = {};
	bool isExhaustive = collectFollowSets(start, stop, sets, stateStack, ruleStack);
	
	// Sets are split by path to allow translating them to preferred rules. But for quick hit tests
	// it is also useful to have a set with all symbols combined.
	antlr4::misc::IntervalSet combined;
	for (auto set: sets) {
		combined.addAll(set.intervals);
	}
	
	return {
		.sets = sets,
		.isExhaustive = isExhaustive,
		.combined = combined
	};
}



/**
 * Collects possible tokens which could be matched following the given ATN state. This is essentially the same
 * algorithm as used in the LL1Analyzer class, but here we consider predicates also and use no parser rule context.
 *
 * @param s The state to continue from.
 * @param stopState The state which ends the collection routine.
 * @param followSets A pass through parameter to add found sets to.
 * @param stateStack A stack to avoid endless recursions.
 * @param ruleStack The current rule stack.
 * @returns true if the follow sets is exhaustive, i.e. we terminated before the rule end was reached, so no
 * subsequent rules could add tokens
 */
bool CodeCompletionCore::collectFollowSets(antlr4::atn::ATNState * s, antlr4::atn::ATNState * stopState, std::vector<FollowSetWithPath>& followSets, std::vector<antlr4::atn::ATNState*>& stateStack, std::vector<size_t>& ruleStack)
{
	if (std::find(stateStack.begin(), stateStack.end(), s) != stateStack.end()) {
		return true;
	}
	stateStack.push_back(s);
	
	if (s == stopState || s->getStateType() == antlr4::atn::ATNStateType::RULE_STOP) {
		stateStack.pop_back();
		return false;
	}
	
	bool isExhaustive = true;
	for (antlr4::atn::ConstTransitionPtr& tp: s->transitions) {
		const antlr4::atn::Transition * transition = tp.get();
		
		if (transition->getTransitionType() == antlr4::atn::TransitionType::RULE) {
			const antlr4::atn::RuleTransition * ruleTransition = static_cast<const antlr4::atn::RuleTransition *>(transition);
			
			if (std::find(ruleStack.begin(), ruleStack.end(), ruleTransition->target->ruleIndex) != ruleStack.end()) {
				continue;
			}
			
			ruleStack.push_back(ruleTransition->target->ruleIndex);
			
			bool ruleFollowSetsIsExhaustive = collectFollowSets(transition->target, stopState, followSets, stateStack, ruleStack);
			ruleStack.pop_back();
			
			// If the subrule had an epsilon transition to the rule end, the tokens added to
			// the follow set are non-exhaustive and we should continue processing subsequent transitions post-rule
			if (!ruleFollowSetsIsExhaustive) {
				bool nextStateFollowSetsIsExhaustive = collectFollowSets(ruleTransition->followState, stopState, followSets, stateStack, ruleStack);
				isExhaustive = isExhaustive && nextStateFollowSetsIsExhaustive;
			}
			
		} else if (transition->getTransitionType() == antlr4::atn::TransitionType::PREDICATE) {
			if (checkPredicate(static_cast<const antlr4::atn::PredicateTransition*>(transition))) {
				bool nextStateFollowSetsIsExhaustive = collectFollowSets(transition->target, stopState, followSets, stateStack, ruleStack);
				isExhaustive = isExhaustive && nextStateFollowSetsIsExhaustive;
			}
		} else if (transition->isEpsilon()) {
			bool nextStateFollowSetsIsExhaustive = collectFollowSets(transition->target, stopState, followSets, stateStack, ruleStack);
			isExhaustive = isExhaustive && nextStateFollowSetsIsExhaustive;
		} else if (transition->getTransitionType() == antlr4::atn::TransitionType::WILDCARD) {
			FollowSetWithPath set;
			set.intervals = antlr4::misc::IntervalSet::of(antlr4::Token::MIN_USER_TOKEN_TYPE, atn.maxTokenType);
			set.path = ruleStack;
			followSets.push_back(set);
		} else {
			antlr4::misc::IntervalSet label = transition->label();
			if (label.size() > 0) {
				if (transition->getTransitionType() == antlr4::atn::TransitionType::NOT_SET) {
					label = label.complement(antlr4::misc::IntervalSet::of(antlr4::Token::MIN_USER_TOKEN_TYPE, atn.maxTokenType));
				}
				FollowSetWithPath set;
				set.intervals = label;
				set.path = ruleStack;
				set.following = getFollowingTokens(transition);
				followSets.push_back(set);
			}
		}
	}
	stateStack.pop_back();
	
	return isExhaustive;
}



/**
 * Walks the ATN for a single rule only. It returns the token stream position for each path that could be matched
 * in this rule.
 * The result can be empty in case we hit only non-epsilon transitions that didn't match the current input or if we
 * hit the caret position.
 *
 * @param startState The start state.
 * @param tokenListIndex The token index we are currently at.
 * @param callStack The stack that indicates where in the ATN we are currently.
 * @param precedence The current precedence level.
 * @param indentation A value to determine the current indentation when doing debug prints.
 * @returns the set of token stream indexes (which depend on the ways that had to be taken).
 */
RuleEndStatus CodeCompletionCore::processRule(antlr4::atn::RuleStartState * startState, size_t tokenListIndex, RuleWithStartTokenList& callStack, int precedence, size_t indentation)
{
	// Start with rule specific handling before going into the ATN walk.
	
	// Check first if we've taken this path with the same input before.
	std::map<size_t, RuleEndStatus> positionMap;
	if (!shortcutMap.contains(startState->ruleIndex)) {
		shortcutMap[startState->ruleIndex] = positionMap;
	} else {
		positionMap = shortcutMap[startState->ruleIndex];
		if (positionMap.contains(tokenListIndex)) {
			if (showDebugOutput) {
				std::cout << "=====> shortcut" << "\n";
			}
			
			return positionMap[tokenListIndex];
		}
	}
	
	RuleEndStatus result;
	
	// For rule start states we determine and cache the follow set, which gives us 3 advantages:
	// 1) We can quickly check if a symbol would be matched when we follow that rule. We can so check in advance
	//    and can save us all the intermediate steps if there is no match.
	// 2) We'll have all symbols that are collectable already together when we are at the caret on rule enter.
	// 3) We get this lookup for free with any 2nd or further visit of the same rule, which often happens
	//    in non trivial grammars, especially with (recursive) expressions and of course when invoking code
	//    completion multiple times.
	
	if (!followSetsByATN.contains(typeid(parser))) {
		followSetsByATN[typeid(parser)] = FollowSetsPerState();
	}
	
	FollowSetsPerState &setsPerState = followSetsByATN[typeid(parser)];
	if (!setsPerState.contains(startState->stateNumber)) {
		auto stop = atn.ruleToStopState[startState->ruleIndex];
		auto followSets = determineFollowSets(startState, stop);
		setsPerState[startState->stateNumber] = followSets;
	}
	FollowSetsHolder followSets = setsPerState[startState->stateNumber];
	
	
	// Get the token index where our rule starts from our (possibly filtered) token list
	size_t startTokenIndex = tokens[tokenListIndex]->getTokenIndex();
	
	callStack.push_back({
		.startTokenIndex = startTokenIndex,
		.ruleIndex = startState->ruleIndex,
	});
	
	if (tokenListIndex >= tokens.size() - 1) { // At caret?
		if (preferredRules.contains(startState->ruleIndex)) {
			// No need to go deeper when collecting entries and we reach a rule that we want to collect anyway.
			translateStackToRuleIndex(callStack);
		} else {
			// Convert all follow sets to either single symbols or their associated preferred rule and add
			// the result to our candidates list.
			for (FollowSetWithPath &set: followSets.sets) {
				RuleWithStartTokenList fullPath = callStack;
				
				// Rules derived from our followSet will always start at the same token as our current rule.
				RuleWithStartTokenList followSetPath;
				for (size_t rule: set.path) {
					followSetPath.push_back({
						.startTokenIndex = startTokenIndex,
						.ruleIndex = rule,
					});
				}
				
				fullPath.insert(fullPath.end(), followSetPath.begin(), followSetPath.end());
				
				if (!translateStackToRuleIndex(fullPath)) {
					for (ssize_t symbol: set.intervals.toList()) {
						if (!ignoredTokens.contains((size_t)symbol)) {
							
							if (showDebugOutput) {
								std::cout << "=====> collected: " << vocabulary.getDisplayName(symbol) << "\n";
							}
							if (!candidates.tokens.contains(symbol)) {
								// Following is empty if there is more than one entry in the set.
								candidates.tokens[symbol] = set.following;
							} else {
								// More than one following list for the same symbol.
								if (candidates.tokens[symbol] != set.following) {
									candidates.tokens[symbol] = {};
								}
							}
							
						}
					}
				}
			}
		}
		
		if (!followSets.isExhaustive) {
			// If we're at the caret but the follow sets is non-exhaustive (empty or all tokens are optional),
			// we should continue to collect tokens following this rule
			result.insert(tokenListIndex);
		}
		
		callStack.pop_back();
		
		return result;
		
	} else {
		// Process the rule if we either could pass it without consuming anything (epsilon transition)
		// or if the current input symbol will be matched somewhere after this entry point.
		// Otherwise stop here.
		size_t currentSymbol = tokens[tokenListIndex]->getType();
		if (followSets.isExhaustive && !followSets.combined.contains(currentSymbol)) {
			callStack.pop_back();
			
			return result;
		}
	}
	
	if (startState->isLeftRecursiveRule) {
		precedenceStack.push_back(precedence);
	}
	
	// The current state execution pipeline contains all yet-to-be-processed ATN states in this rule.
	// For each such state we store the token index + a list of rules that lead to it.
	std::vector<PipelineEntry> statePipeline;
	
	// Bootstrap the pipeline.
	statePipeline.push_back({
		.state = startState,
		.tokenListIndex = tokenListIndex
	});
	
	while (statePipeline.size() > 0) {
		PipelineEntry currentEntry = statePipeline.back();
		statePipeline.pop_back();
		++statesProcessed;
		
		size_t currentSymbol = tokens[currentEntry.tokenListIndex]->getType();
		
		bool atCaret = currentEntry.tokenListIndex >= tokens.size() - 1;
		if (showDebugOutput) {
			printDescription(indentation, currentEntry.state, generateBaseDescription(currentEntry.state), currentEntry.tokenListIndex);
			if (showRuleStack) {
				printRuleState(callStack);
			}
		}
		
		if (currentEntry.state->getStateType() == antlr4::atn::ATNStateType::RULE_STOP) {
			// Record the token index we are at, to report it to the caller.
			result.insert(currentEntry.tokenListIndex);
			continue;
		}
		
		
		// We simulate here the same precedence handling as the parser does, which uses hard coded values.
		// For rules that are not left recursive this value is ignored (since there is no precedence transition).
		for (antlr4::atn::ConstTransitionPtr& transition: currentEntry.state->transitions) {
			
			switch (transition->getTransitionType()) {
				case antlr4::atn::TransitionType::RULE: {
					const atn::RuleTransition * ruleTransition = static_cast<const atn::RuleTransition*>(transition.get());
					atn::RuleStartState * ruleStartState = static_cast<atn::RuleStartState*>(ruleTransition->target);
					RuleEndStatus endStatus = processRule(ruleStartState, currentEntry.tokenListIndex, callStack, ruleTransition->precedence, indentation + 1);
					
					for (size_t position: endStatus) {
						statePipeline.push_back({
							.state = ruleTransition->followState,
							.tokenListIndex = position,
						});
					}
					break;
				}
					
				case antlr4::atn::TransitionType::PREDICATE: {
					const atn::PredicateTransition * predTransition = static_cast<const atn::PredicateTransition*>(transition.get());
					if (checkPredicate(predTransition)) {
						statePipeline.push_back({
							.state = transition->target,
							.tokenListIndex = currentEntry.tokenListIndex,
						});
					}
					break;
				}
					
				case antlr4::atn::TransitionType::PRECEDENCE: {
					const atn::PrecedencePredicateTransition * predTransition = static_cast<const atn::PrecedencePredicateTransition*>(transition.get());
					if (predTransition->getPrecedence() >= precedenceStack[precedenceStack.size() - 1]) {
						statePipeline.push_back({
							.state = transition->target,
							.tokenListIndex = currentEntry.tokenListIndex,
						});
					}
					
					break;
				}
					
				case antlr4::atn::TransitionType::WILDCARD: {
					if (atCaret) {
						if (!translateStackToRuleIndex(callStack)) {
							for (auto token: antlr4::misc::IntervalSet::of(antlr4::Token::MIN_USER_TOKEN_TYPE, atn.maxTokenType).toList()) {
								 if (!ignoredTokens.contains(token)) {
									 candidates.tokens[token] = {};
								 }
							 }
						}
					} else {
						statePipeline.push_back({
							.state = transition->target,
							.tokenListIndex = currentEntry.tokenListIndex + 1,
						});
					}
					break;
				}
					
				default: {
					if (transition->isEpsilon()) {
						// Jump over simple states with a single outgoing epsilon transition.
						statePipeline.push_back({
							.state = transition->target,
							.tokenListIndex = currentEntry.tokenListIndex,
						});
						continue;
					}
					
					antlr4::misc::IntervalSet set = transition->label();
					if (set.size() > 0) {
						if (transition->getTransitionType() == antlr4::atn::TransitionType::NOT_SET) {
							set = set.complement(antlr4::misc::IntervalSet::of(antlr4::Token::MIN_USER_TOKEN_TYPE, atn.maxTokenType));
						}
						if (atCaret) {
							if (!translateStackToRuleIndex(callStack)) {
								std::vector<ssize_t> list = set.toList();
								bool hasTokenSequence = list.size() == 1;
								for (size_t symbol: list) {
									if (!ignoredTokens.contains(symbol)) {
										if (showDebugOutput) {
											std::cout << "=====> collected: " << vocabulary.getDisplayName(symbol) << "\n";
										}
										
										std::vector<size_t> followingTokens;
										if (hasTokenSequence) {
											followingTokens = getFollowingTokens(transition.get());
										}
										if (!candidates.tokens.contains(symbol)) {
											candidates.tokens[symbol] = followingTokens;
										} else {
											candidates.tokens[symbol] = longestCommonPrefix(followingTokens, candidates.tokens[symbol]);
										}
									}
								}
							}
						} else {
							if (set.contains(currentSymbol)) {
								if (showDebugOutput) {
									std::cout << "=====> consumed: " << vocabulary.getDisplayName(currentSymbol) << "\n";
								}
								statePipeline.push_back({
									.state = transition->target,
									.tokenListIndex = currentEntry.tokenListIndex + 1,
								});
							}
						}
					}
				}
			}
		}
	}
	
	callStack.pop_back();
	
	if (startState->isLeftRecursiveRule) {
		precedenceStack.pop_back();
	}
	
	// Cache the result, for later lookup to avoid duplicate walks.
	positionMap[tokenListIndex] = result;
	
	return result;
}



// ----------------------------------------------------------------------------
// MARK: - Debug
// ----------------------------------------------------------------------------

std::string CodeCompletionCore::generateBaseDescription(antlr4::atn::ATNState * state)
{
	std::string stateValue = (state->stateNumber == atn::ATNState::INVALID_STATE_NUMBER) ? "Invalid" : std::to_string(state->stateNumber);
	std::stringstream output;
	
	output << "[" << stateValue << " " << atnStateTypeMap[(size_t)state->getStateType()] << "]";
	output << " in ";
	output << ruleNames[state->ruleIndex];
	return output.str();
}


void CodeCompletionCore::printDescription(size_t indentation, antlr4::atn::ATNState * state, std::string const& baseDescription, size_t tokenIndex)
{
	std::string indent = std::string(indentation * 2, ' ');
	std::string output = "";
	std::string transitionDescription = "";
	
	if (debugOutputWithTransitions) {
		for (antlr4::atn::ConstTransitionPtr& transition: state->transitions) {
		
			std::string labels = "";
			std::vector<ssize_t> symbols = transition->label().toList();
			
			if (symbols.size() > 2) {
				// Only print start and end symbols to avoid large lists in debug output.
				labels = vocabulary.getDisplayName((size_t)symbols[0]) + " .. " + vocabulary.getDisplayName((size_t)symbols[symbols.size() - 1]);
			} else {
				for (size_t symbol: symbols) {
					if (labels.size() > 0) {
						labels += ", ";
					}
					labels += vocabulary.getDisplayName(symbol);
				}
			}
			if (labels.size() == 0) {
				labels = "ε";
			}
			
			transitionDescription += "\n" + indent + "\t(" + labels + ") " + 
			                         "[" + std::to_string(transition->target->stateNumber) + " " + atnStateTypeMap[(size_t)transition->target->getStateType()] + "]"
			                         " in " + ruleNames[transition->target->ruleIndex];
		}
	}
	
	if (tokenIndex >= tokens.size() - 1) {
		output = "<<" + std::to_string(tokenStartIndex + tokenIndex) + ">> ";
	} else {
		output = "<" + std::to_string(tokenStartIndex + tokenIndex) + "> ";
	}
	
	std::cout << indent + output + "Current state: " + baseDescription + transitionDescription << "\n";
}


void CodeCompletionCore::printRuleState(RuleWithStartTokenList const& stack)
{
	if (stack.size() == 0) {
		std::cout << "<empty stack>\n";
		return;
	}
	
	if (stack.size() > 0) {
		for (RuleWithStartToken rule: stack) {
			std::cout << ruleNames[rule.ruleIndex];
		}
		std::cout << "\n";
	}
}


} // namespace c3;
