import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

interface MarkdownRenderProps {
  content: string;
  className?: string;
}

const MarkdownRender: React.FC<MarkdownRenderProps> = ({
  content,
  className,
}) => {
  return (
    <div
      className={
        className ||
        "prose prose-lg prose-white mt-8 text-left max-w-5xl mx-auto"
      }
    >
      <ReactMarkdown
        components={{
          code({ node, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            if (className && match) {
              // Code block
              return (
                <SyntaxHighlighter
                  // @ts-expect-error: type mismatch between style prop and SyntaxHighlighterProps
                  style={oneLight}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              );
            }
            // Inline code (backticks)
            return (
              <span
                style={{
                  background: "#d7d7d7",
                  padding: "0.2em 0.4em",
                  borderRadius: "4px",
                  fontSize: "0.95em",
                  fontFamily: "monospace",
                  color: "#000",
                }}
                {...props}
              >
                {String(children).replace(/`/g, "")}
              </span>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRender;
