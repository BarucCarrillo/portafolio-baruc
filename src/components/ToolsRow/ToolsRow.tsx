import { Animator } from "../Animator";
import "./tools-row.scss";

type Tool = {
  logo: { svg: string; variants?: Record<string, string> };
  title: string;
  variant?: string;
};

type ToolsRowProps = {
  title: string;
  tools: Tool[];
  className?: string;
};

export const ToolsRow = ({ title, tools, className = "tools-row" }: ToolsRowProps) => {
  return (
    <>
      <Animator animation="scaleUp" delay={0.5}>
        <h2 className="tools-section-title">{title}</h2>
      </Animator>
      <Animator className={className} animation="slideUp" delay={0.5}>
        {tools.map(({ logo, title, variant }) => {
          const svg = variant ? logo.variants?.[variant] ?? logo.svg : logo.svg;

          return (
            <div key={title} className="develop-tools-container">
              <div
                dangerouslySetInnerHTML={{ __html: svg }}
                className="develop-tools-logo"
              />
              <span className="develop-tools-title">{title}</span>
            </div>
          );
        })}
      </Animator>
    </>
  );
};