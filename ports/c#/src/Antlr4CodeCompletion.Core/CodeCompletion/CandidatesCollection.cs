using System.Collections.Generic;

namespace Antlr4CodeCompletion.Core.CodeCompletion
{
    /// <summary>
    /// </summary>
    /// <remarks>
    /// Port of antlr-c3 javascript library to c#
    /// The c3 engine is able to provide code completion candidates useful for
    /// editors with ANTLR generated parsers, independent of the actual
    /// language/grammar used for the generation.
    /// https://github.com/mike-lischke/antlr4-c3
    /// </remarks>
    public class CandidatesCollection
    {
        /// <summary>
        /// Collection of Rule candidates, each with the callstack of rules to
        /// reach the candidate
        /// </summary>
        public IDictionary<int, IList<int>> Rules = new Dictionary<int, IList<int>>();

        /// <summary>
        /// Collection of Token ID candidates, each with a follow-on List of
        /// subsequent tokens
        /// </summary>
        public IDictionary<int, IList<int>> Tokens = new Dictionary<int, IList<int>>();

        /// <summary>
        /// Collection of matched Preferred Rules each with their start and end
        /// offsets
        /// </summary>
        public IDictionary<int, IList<int>> RulePositions = new Dictionary<int, IList<int>>();

        public override string ToString()
        {
            return "CandidatesCollection{" + "tokens=" + Tokens + ", rules=" + Rules + ", ruleStrings=" + RulePositions + '}';
        }
    }
}
