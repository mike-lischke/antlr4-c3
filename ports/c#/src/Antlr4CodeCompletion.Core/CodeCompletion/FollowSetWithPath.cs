using Antlr4.Runtime.Misc;
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
    [DebuggerDisplay("FollowSetWithPath: following = {Following} , intervals = {Intervals}, path = {Path}")]
    internal class FollowSetWithPath : IEquatable<FollowSetWithPath>
    {
        internal IList<int> Following { get; set; }
        internal IntervalSet Intervals { get; set; }
        internal IList<int> Path { get; set; }

        public override bool Equals(object obj)
        {
            return Equals(obj as FollowSetWithPath);
        }

        public bool Equals(FollowSetWithPath other)
        {
            return other != null &&
                   EqualityComparer<IList<int>>.Default.Equals(Following, other.Following) &&
                   EqualityComparer<IntervalSet>.Default.Equals(Intervals, other.Intervals) &&
                   EqualityComparer<IList<int>>.Default.Equals(Path, other.Path);
        }

        public override int GetHashCode()
        {
            var hashCode = 904860839;
            hashCode = hashCode * -1521134295 + EqualityComparer<IList<int>>.Default.GetHashCode(Following);
            hashCode = hashCode * -1521134295 + EqualityComparer<IntervalSet>.Default.GetHashCode(Intervals);
            hashCode = hashCode * -1521134295 + EqualityComparer<IList<int>>.Default.GetHashCode(Path);
            return hashCode;
        }
    }
}
