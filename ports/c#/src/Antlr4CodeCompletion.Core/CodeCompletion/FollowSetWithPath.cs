using Antlr4.Runtime.Misc;
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
    internal class FollowSetWithPath
    {
        internal IList<int> Following { get; set; }
        internal IntervalSet Intervals { get; set; }
        internal IList<int> Path { get; set; }
    }
}
