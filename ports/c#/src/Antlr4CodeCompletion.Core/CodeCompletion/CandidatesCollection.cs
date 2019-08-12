using System;
using System.Collections.Generic;
using System.Diagnostics;

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
    [DebuggerDisplay("CandidatesCollection: tokens = {Tokens} , rules = {Rules} , ruleStrings = {RulePositions}")]
    public class CandidatesCollection : IEquatable<CandidatesCollection>
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

        public override bool Equals(object obj)
        {
            return Equals(obj as CandidatesCollection);
        }

        public bool Equals(CandidatesCollection other)
        {
            return other != null &&
                   EqualityComparer<IDictionary<int, IList<int>>>.Default.Equals(Rules, other.Rules) &&
                   EqualityComparer<IDictionary<int, IList<int>>>.Default.Equals(Tokens, other.Tokens) &&
                   EqualityComparer<IDictionary<int, IList<int>>>.Default.Equals(RulePositions, other.RulePositions);
        }

        public override int GetHashCode()
        {
            var hashCode = -1987583628;
            hashCode = hashCode * -1521134295 + EqualityComparer<IDictionary<int, IList<int>>>.Default.GetHashCode(Rules);
            hashCode = hashCode * -1521134295 + EqualityComparer<IDictionary<int, IList<int>>>.Default.GetHashCode(Tokens);
            hashCode = hashCode * -1521134295 + EqualityComparer<IDictionary<int, IList<int>>>.Default.GetHashCode(RulePositions);
            return hashCode;
        }
    }
}
