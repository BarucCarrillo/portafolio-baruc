import { projects } from "../../data/projects-data";
import { skills_data } from "../../data/tools-data";
import { DevelopmentSection } from "../DevelopmentSection/DevelopmentSection";
import { ToolsRow } from "../ToolsRow/ToolsRow";
import "./WorksModal.scss";

export const WorksModal = () => {
  return (
    <div className="section-works-modal">
      <div className="develop-tools">
        <ToolsRow title="DEVELOP TOOLS" tools={skills_data.develop} />
        <ToolsRow
          title="WEB FRAMEWORKS"
          tools={skills_data.frameworks}
          className="frameworks-row"
        />
        <ToolsRow
          title="MOBILE FRAMEWORKS"
          tools={skills_data.mobile}
          className="frameworks-row"
        />
        <ToolsRow
          title="DATABASES"
          tools={skills_data.databases}
          className="frameworks-row"
        />
        <ToolsRow
          title="GENERAL TOOLS"
          tools={skills_data.general}
          className="frameworks-row"
        />
      </div>
      <div className="development-container">
        <DevelopmentSection
          img={projects.barre.img}
          title={projects.barre.title}
          description={projects.barre.description}
          url={projects.barre.url}
        />
        <DevelopmentSection
          img={projects.dosam.img}
          title={projects.dosam.title}
          description={projects.dosam.description}
          url={projects.dosam.url}
        />
      </div>
    </div>
  );
};
