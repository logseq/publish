import SyntaxHighlighter from 'react-syntax-highlighter'

export default function LSSrc({ c }) {
  const { lines, language } = c
  const code = lines.slice(0, lines.length - 1).join('')
  return <SyntaxHighlighter language={language}>{code}</SyntaxHighlighter>
}
