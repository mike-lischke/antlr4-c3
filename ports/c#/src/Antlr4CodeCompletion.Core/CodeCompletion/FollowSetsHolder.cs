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
    [DebuggerDisplay("FollowSetsHolder: combined = {Combined} , sets = {Sets}")]
    internal class FollowSetsHolder : IEquatable<FollowSetsHolder>
    {
        internal IntervalSet Combined { get; set; }
        internal IList<FollowSetWithPath> Sets { get; set; }

        public override bool Equals(object obj)
        {
            return Equals(obj as FollowSetsHolder);
        }

        public bool Equals(FollowSetsHolder other)
        {
            return other != null &&
                   EqualityComparer<IntervalSet>.Default.Equals(Combined, other.Combined) &&
                   EqualityComparer<IList<FollowSetWithPath>>.Default.Equals(Sets, other.Sets);
        }

        public override int GetHashCode()
        {
            var hashCode = -668181302;
            hashCode = hashCode * -1521134295 + EqualityComparer<IntervalSet>.Default.GetHashCode(Combined);
            hashCode = hashCode * -1521134295 + EqualityComparer<IList<FollowSetWithPath>>.Default.GetHashCode(Sets);
            return hashCode;
        }
    }
}
