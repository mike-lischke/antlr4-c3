using Antlr4.Runtime.Atn;

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
    internal class PipelineEntry
    {
        internal ATNState State { get; }
        internal int TokenIndex { get; }

        internal PipelineEntry(ATNState state, int tokenIndex)
        {
            this.State = state;
            this.TokenIndex = tokenIndex;
        }
    }
}
