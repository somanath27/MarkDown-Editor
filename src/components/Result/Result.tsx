import "./Result.css";
import ReactMarkdown, { Components } from "react-markdown";
import { useMarkdownContext } from "../../provider/EditorContext";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const Result = () => {
  const { markdownText } = useMarkdownContext();

  const components: Components = {
    code(props) {
      const { children, className } = props;
      const language = className ? className.replace(/language-/, "") : "text";

      return (
        <SyntaxHighlighter language={language} style={solarizedlight}>
          {String(children)}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <div className="container">
      <div className="title">Output</div>
      <div className="result-area">
        <ReactMarkdown components={components}>{markdownText}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Result;
