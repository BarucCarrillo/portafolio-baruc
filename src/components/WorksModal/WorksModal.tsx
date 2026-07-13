import { projects } from "../../data/projects-data";
import { skills_data } from "../../data/tools-data";
import { Animator } from "../Animator";
import { DevelopmentCarousel } from "../DevelopmentCarousel/DevelopmentCarousel";
import { ToolsRow } from "../ToolsRow/ToolsRow";
import "./WorksModal.scss";

const projectsList = [
  projects.barre,
  projects.dosam,
  projects.oftalia,
  projects.ga
];

export const WorksModal = () => {
  return (
    <div className="section-works-modal">
      <div className="develop-tools">
        <ToolsRow title="DEVELOP TOOLS" tools={skills_data.develop} />
        <ToolsRow
          title="WEB FRAMEWORKS"
          tools={skills_data.frameworks}
        />
        <ToolsRow
          title="MOBILE FRAMEWORKS"
          tools={skills_data.mobile}
        />
        <ToolsRow
          title="DATABASES"
          tools={skills_data.databases}
        />
        <ToolsRow
          title="GENERAL TOOLS"
          tools={skills_data.general}
        />
      </div>
      <Animator className="development-container" animation='slideUp' delay={3} duration={1}>
        <Animator animation='fadeIn' delay={3} duration={1}>
          <h2 className="development-title">WORKS</h2>
        </Animator>
        <DevelopmentCarousel projects={projectsList}/>
      </Animator>
    </div>
  );
};
