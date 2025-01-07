// ignore_for_file: unused_local_variable

/*
 * Copyright © 2024 VMware, Inc & dudu.ltd. All Rights Reserved.
 *
 * SPDX-License-Identifier: MIT
 *
 * See LICENSE file for more info.
 */

// Translated from Java to Dart
// https://github.com/mike-lischke/antlr4-c3

part of '../antlr4_c3.dart';

class CodeCompletionCore {
  static final logger = Logger('CodeCompletionCore');

  bool showResult = true;
  bool showDebugOutput = false;
  bool debugOutputWithTransitions = true;
  bool showRuleStack = true;

  Set<int> ignoredTokens = {};
  Set<int> preferredRules = {};

  Parser parser;
  late ATN atn;
  late Vocabulary vocabulary;
  late List<String> ruleNames;
  List<Token> tokens = [];

  int tokenStartIndex = 0;
  int statesProcessed = 0;

  final Map<int, Map<int, Set<int>>> shortcutMap = {};
  final CandidatesCollection candidates = CandidatesCollection();

  static final Map<String, Map<int, FollowSetsHolder>> followSetsByATN = {};

  CodeCompletionCore(
    this.parser, [
    Set<int>? preferredRules,
    Set<int>? ignoredTokens,
  ]) {
    atn = parser.getATN();
    vocabulary = parser.vocabulary;
    ruleNames = parser.ruleNames;
    if (preferredRules != null) {
      this.preferredRules = preferredRules;
    }
    if (ignoredTokens != null) {
      this.ignoredTokens = ignoredTokens;
    }
  }

  Set<int> getPreferredRules() {
    return Set.unmodifiable(preferredRules);
  }

  void setPreferredRules(Set<int> preferredRules) {
    this.preferredRules = Set.from(preferredRules);
  }

  CandidatesCollection collectCandidates(
      int caretTokenIndex, ParserRuleContext? context) {
    shortcutMap.clear();
    candidates.rules.clear();
    candidates.tokens.clear();
    statesProcessed = 0;

    tokenStartIndex = context?.start != null ? context!.start!.tokenIndex : 0;
    TokenStream tokenStream = parser.inputStream;

    int currentIndex = tokenStream.index;
    tokenStream.seek(tokenStartIndex);
    tokens = [];
    int offset = 1;
    while (true) {
      Token token = tokenStream.LT(offset++)!;
      tokens.add(token);
      if (token.tokenIndex >= caretTokenIndex || token.type == Token.EOF) {
        break;
      }
    }
    tokenStream.seek(currentIndex);

    List<int> callStack = [];
    int startRule = context != null ? context.ruleIndex : 0;
    processRule(atn.ruleToStartState[startRule], 0, callStack, "\n");

    tokenStream.seek(currentIndex);

    for (int ruleId in preferredRules) {
      final shortcut = shortcutMap[ruleId];
      if (shortcut == null || shortcut.isEmpty) {
        continue;
      }
      final startToken = shortcut.keys.reduce((a, b) => a > b ? a : b);
      final endSet = shortcut[startToken]!;
      final endToken = endSet.isEmpty
          ? tokens.length - 1
          : endSet.reduce((a, b) => a > b ? a : b);
      final startOffset = tokens[startToken].startIndex;
      final endOffset = tokens[endToken].type == Token.EOF
          ? tokens[endToken].startIndex
          : tokens[endToken - 1].stopIndex + 1;

      final ruleStartStop = [startOffset, endOffset];
      candidates.rulePositions[ruleId] = ruleStartStop;
    }

    if (showResult && logger.isLoggable(Level.FINE)) {
      StringBuffer logMessage = StringBuffer();

      logMessage.write("States processed: $statesProcessed\n");

      logMessage.write("Collected rules:\n");

      candidates.rules.forEach((key, value) {
        logMessage.write("  $key, path: ");
        for (int token in value) {
          logMessage.write("${ruleNames[token]} ");
        }
        logMessage.write("\n");
      });

      logMessage.write("Collected Tokens:\n");
      candidates.tokens.forEach((key, value) {
        logMessage.write("  ${vocabulary.getDisplayName(key)}");
        for (int following in value) {
          logMessage.write(" ${vocabulary.getDisplayName(following)}");
        }
        logMessage.write("\n");
      });
      logger.fine(logMessage.toString());
    }

    return candidates;
  }

  bool checkPredicate(PredicateTransition transition) {
    return transition.predicate.eval(parser, ParserRuleContext.EMPTY);
  }

  bool translateToRuleIndex(List<int> ruleStack) {
    if (preferredRules.isEmpty) return false;

    for (int i = 0; i < ruleStack.length; ++i) {
      if (preferredRules.contains(ruleStack[i])) {
        List<int> path = List.from(ruleStack.sublist(0, i));
        bool addNew = true;
        candidates.rules.forEach((key, value) {
          if (key == ruleStack[i] &&
              value.length == path.length &&
              value == path) {
            addNew = false;
          }
        });

        if (addNew) {
          candidates.rules[ruleStack[i]] = path;
          if (showDebugOutput && logger.isLoggable(Level.FINE)) {
            logger.fine("=====> collected: ${ruleNames[i]}");
          }
        }
        return true;
      }
    }

    return false;
  }

  List<int> getFollowingTokens(Transition initialTransition) {
    List<int> result = [];
    List<ATNState> seen = [];
    List<ATNState> pipeline = [initialTransition.target];

    while (pipeline.isNotEmpty) {
      ATNState state = pipeline.removeLast();

      for (Transition transition in state.transitions) {
        if (transition.type == TransitionType.ATOM) {
          if (!transition.isEpsilon) {
            List<int> list = transition.label!.toList();
            if (list.length == 1 && !ignoredTokens.contains(list[0])) {
              result.add(list[0]);
              pipeline.add(transition.target);
            }
          } else {
            pipeline.add(transition.target);
          }
        }
      }
    }

    return result;
  }

  List<FollowSetWithPath> determineFollowSets(ATNState start, ATNState stop) {
    List<FollowSetWithPath> result = [];
    Set<ATNState> seen = {};
    List<int> ruleStack = [];

    collectFollowSets(start, stop, result, seen, ruleStack);

    return result;
  }

  void collectFollowSets(
      ATNState s,
      ATNState stopState,
      List<FollowSetWithPath> followSets,
      Set<ATNState> seen,
      List<int> ruleStack) {
    if (seen.contains(s)) return;

    seen.add(s);

    if (s == stopState || s.stateType == StateType.RULE_STOP) {
      FollowSetWithPath set = FollowSetWithPath();
      set.intervals = IntervalSet.ofOne(Token.EPSILON);
      set.path = List.from(ruleStack);
      set.following = [];
      followSets.add(set);
      return;
    }

    for (Transition transition in s.transitions) {
      if (transition.type == TransitionType.RULE) {
        RuleTransition ruleTransition = transition as RuleTransition;
        if (ruleStack.contains(ruleTransition.target.ruleIndex)) {
          continue;
        }
        ruleStack.add(ruleTransition.target.ruleIndex);
        collectFollowSets(
            transition.target, stopState, followSets, seen, ruleStack);
        ruleStack.removeLast();
      } else if (transition.type == TransitionType.PREDICATE) {
        if (checkPredicate(transition as PredicateTransition)) {
          collectFollowSets(
              transition.target, stopState, followSets, seen, ruleStack);
        }
      } else if (transition.isEpsilon) {
        collectFollowSets(
            transition.target, stopState, followSets, seen, ruleStack);
      } else if (transition.type == TransitionType.WILDCARD) {
        FollowSetWithPath set = FollowSetWithPath();
        set.intervals =
            IntervalSet.ofRange(Token.MIN_USER_TOKEN_TYPE, atn.maxTokenType);
        set.path = List.from(ruleStack);
        set.following = [];
        followSets.add(set);
      } else {
        IntervalSet? label = transition.label;
        if (label != null && label.length > 0) {
          if (transition.type == TransitionType.NOT_SET) {
            label = label.complement(IntervalSet.ofRange(
                Token.MIN_USER_TOKEN_TYPE, atn.maxTokenType));
          }
          FollowSetWithPath set = FollowSetWithPath();
          set.intervals = label!;
          set.path = List.from(ruleStack);
          set.following = getFollowingTokens(transition);
          followSets.add(set);
        }
      }
    }
  }

  Set<int> processRule(ATNState startState, int tokenIndex, List<int> callStack,
      String indentation) {
    Map<int, Set<int>>? positionMap = shortcutMap[startState.ruleIndex];
    if (positionMap == null) {
      positionMap = {};
      shortcutMap[startState.ruleIndex] = positionMap;
    } else {
      if (positionMap.containsKey(tokenIndex)) {
        if (showDebugOutput) {
          logger.fine("=====> shortcut");
        }
        return positionMap[tokenIndex]!;
      }
    }

    Set<int> result = {};

    Map<int, FollowSetsHolder>? setsPerState =
        followSetsByATN[parser.runtimeType.toString()];
    if (setsPerState == null) {
      setsPerState = {};
      followSetsByATN[parser.runtimeType.toString()] = setsPerState;
    }

    FollowSetsHolder? followSets = setsPerState[startState.stateNumber];
    if (followSets == null) {
      followSets = FollowSetsHolder();
      setsPerState[startState.stateNumber] = followSets;
      RuleStopState stop = atn.ruleToStopState[startState.ruleIndex];
      followSets.sets = determineFollowSets(startState, stop);

      IntervalSet combined = IntervalSet();
      for (FollowSetWithPath set in followSets.sets) {
        combined.addAll(set.intervals);
      }
      followSets.combined = combined;
    }

    callStack.add(startState.ruleIndex);
    int currentSymbol = tokens[tokenIndex].type;

    if (tokenIndex >= tokens.length - 1) {
      if (preferredRules.contains(startState.ruleIndex)) {
        translateToRuleIndex(callStack);
      } else {
        for (FollowSetWithPath set in followSets.sets) {
          List<int> fullPath = List.from(callStack)..addAll(set.path);
          if (!translateToRuleIndex(fullPath)) {
            for (int symbol in set.intervals.toList()) {
              if (!ignoredTokens.contains(symbol)) {
                if (showDebugOutput && logger.isLoggable(Level.FINE)) {
                  logger.fine(
                      "=====> collected: ${vocabulary.getDisplayName(symbol)}");
                }
                if (!candidates.tokens.containsKey(symbol)) {
                  candidates.tokens[symbol] = set.following;
                } else {
                  if (candidates.tokens[symbol] != set.following) {
                    candidates.tokens[symbol] = [];
                  }
                }
              } else {
                logger.fine("====> collection: Ignoring token: $symbol");
              }
            }
          }
        }
      }

      callStack.removeLast();
      return result;
    } else {
      if (!followSets.combined.contains(Token.EPSILON) &&
          !followSets.combined.contains(currentSymbol)) {
        callStack.removeLast();
        return result;
      }
    }

    List<PipelineEntry> statePipeline = [PipelineEntry(startState, tokenIndex)];

    while (statePipeline.isNotEmpty) {
      PipelineEntry currentEntry = statePipeline.removeLast();
      statesProcessed++;

      currentSymbol = tokens[currentEntry.tokenIndex].type;

      bool atCaret = currentEntry.tokenIndex >= tokens.length - 1;
      if (logger.isLoggable(Level.FINE)) {
        printDescription(
            indentation,
            currentEntry.state,
            generateBaseDescription(currentEntry.state),
            currentEntry.tokenIndex);
        if (showRuleStack) {
          printRuleState(callStack);
        }
      }

      switch (currentEntry.state.stateType) {
        case StateType.RULE_START:
          indentation += "  ";
          break;

        case StateType.RULE_STOP:
          result.add(currentEntry.tokenIndex);
          continue;

        default:
          break;
      }

      for (Transition transition in currentEntry.state.transitions) {
        switch (transition.type) {
          case TransitionType.RULE:
            Set<int> endStatus = processRule(transition.target,
                currentEntry.tokenIndex, callStack, indentation);
            for (int position in endStatus) {
              statePipeline.add(PipelineEntry(
                  (transition as RuleTransition).followState, position));
            }
            break;

          case TransitionType.PREDICATE:
            if (checkPredicate(transition as PredicateTransition)) {
              statePipeline.add(
                  PipelineEntry(transition.target, currentEntry.tokenIndex));
            }
            break;

          case TransitionType.WILDCARD:
            if (atCaret) {
              if (!translateToRuleIndex(callStack)) {
                for (int token in IntervalSet.ofRange(
                        Token.MIN_USER_TOKEN_TYPE, atn.maxTokenType)
                    .toList()) {
                  if (!ignoredTokens.contains(token)) {
                    candidates.tokens[token] = [];
                  }
                }
              }
            } else {
              statePipeline.add(PipelineEntry(
                  transition.target, currentEntry.tokenIndex + 1));
            }
            break;

          default:
            if (transition.isEpsilon) {
              statePipeline.add(
                  PipelineEntry(transition.target, currentEntry.tokenIndex));
              continue;
            }

            IntervalSet? set = transition.label;
            if (set != null && set.length > 0) {
              if (transition.type == TransitionType.NOT_SET) {
                set = set.complement(IntervalSet.ofRange(
                    Token.MIN_USER_TOKEN_TYPE, atn.maxTokenType));
              }
              if (atCaret) {
                if (!translateToRuleIndex(callStack)) {
                  List<int> list = set!.toList();
                  bool addFollowing = list.length == 1;
                  for (int symbol in list) {
                    if (!ignoredTokens.contains(symbol)) {
                      if (showDebugOutput && logger.isLoggable(Level.FINE)) {
                        logger.fine(
                            "=====> collected: ${vocabulary.getDisplayName(symbol)}");
                      }
                      if (addFollowing) {
                        candidates.tokens[symbol] =
                            getFollowingTokens(transition);
                      } else {
                        candidates.tokens[symbol] = [];
                      }
                    } else {
                      logger.fine("====> collected: Ignoring token: $symbol");
                    }
                  }
                }
              } else {
                if (set!.contains(currentSymbol)) {
                  if (showDebugOutput && logger.isLoggable(Level.FINE)) {
                    logger.fine(
                        "=====> consumed: ${vocabulary.getDisplayName(currentSymbol)}");
                  }
                  statePipeline.add(PipelineEntry(
                      transition.target, currentEntry.tokenIndex + 1));
                }
              }
            }
        }
      }
    }

    callStack.removeLast();

    positionMap[tokenIndex] = result;

    return result;
  }

  List<String> atnStateTypeMap = [
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
    "loop end"
  ];

  String generateBaseDescription(ATNState state) {
    String stateValue = (state.stateNumber == ATNState.INVALID_STATE_NUMBER)
        ? "Invalid"
        : state.stateNumber.toString();
    return "[$stateValue ${atnStateTypeMap[state.stateType.index]}] in ${ruleNames[state.ruleIndex]}";
  }

  void printDescription(String currentIndent, ATNState state,
      String baseDescription, int tokenIndex) {
    StringBuffer output = StringBuffer(currentIndent);

    StringBuffer transitionDescription = StringBuffer();
    if (debugOutputWithTransitions && logger.isLoggable(Level.FINER)) {
      for (Transition transition in state.transitions) {
        StringBuffer labels = StringBuffer();
        List<int> symbols =
            transition.label != null ? transition.label!.toList() : [];
        if (symbols.length > 2) {
          labels.write(
              "${vocabulary.getDisplayName(symbols[0])} .. ${vocabulary.getDisplayName(symbols[symbols.length - 1])}");
        } else {
          for (int symbol in symbols) {
            if (labels.isNotEmpty) {
              labels.write(", ");
            }
            labels.write(vocabulary.getDisplayName(symbol));
          }
        }
        if (labels.isEmpty) {
          labels.write("ε");
        }
        transitionDescription
          ..write("\n")
          ..write(currentIndent)
          ..write("\t(")
          ..write(labels)
          ..write(") [")
          ..write(transition.target.stateNumber)
          ..write(" ")
          ..write(atnStateTypeMap[transition.target.stateType.index])
          ..write("] in ")
          ..write(ruleNames[transition.target.ruleIndex]);
      }

      if (tokenIndex >= tokens.length - 1) {
        output.write("<<${tokenStartIndex + tokenIndex}>> ");
      } else {
        output.write("<${tokenStartIndex + tokenIndex}> ");
      }
      logger.finer(
          "$output Current state: $baseDescription$transitionDescription");
    }
  }

  void printRuleState(List<int> stack) {
    if (stack.isEmpty) {
      logger.fine("<empty stack>");
      return;
    }

    if (logger.isLoggable(Level.FINER)) {
      StringBuffer sb = StringBuffer();
      for (int rule in stack) {
        sb.write("  ${ruleNames[rule]}\n");
      }
      logger.finer(sb.toString());
    }
  }
}

class CandidatesCollection {
  Map<int, List<int>> tokens = {};
  Map<int, List<int>> rules = {};
  Map<int, List<int>> rulePositions = {};

  @override
  String toString() {
    return "CandidatesCollection{tokens=$tokens, rules=$rules, ruleStrings=$rulePositions}";
  }
}

class FollowSetWithPath {
  late IntervalSet intervals;
  late List<int> path;
  late List<int> following;
}

class FollowSetsHolder {
  late List<FollowSetWithPath> sets;
  late IntervalSet combined;
}

class PipelineEntry {
  ATNState state;
  int tokenIndex;

  PipelineEntry(this.state, this.tokenIndex);
}
