import React from "react";
import FooterAdresse from "../HomePage/Footer/FooterAdresse";
import ProjectsContents from "./ProjectsComponents/ProjectsContents";
import ProjectsHeader from "./ProjectsComponents/ProjectsHeader";

const PageProjects = () => {
  return (
    <div>
      <ProjectsContents />
      <FooterAdresse />
      {/* <ProjectsHeader /> */}
    </div>
  );
};

export default PageProjects;
