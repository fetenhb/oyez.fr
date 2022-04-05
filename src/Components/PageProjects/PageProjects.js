import React from "react";
import FooterAdresse from "../HomePage/Footer/FooterAdresse";
import ProjectsContents from "./ProjectsComponents/ProjectsContents";
import ProjectsHeader from "./ProjectsComponents/ProjectsHeader";
import Projets from "./ProjectsComponents/Projets";
import Navbar from "./ProjectsPages/ProjectsNavbar/ProjectsNavbar";

const PageProjects = () => {
  return (
    <div>
      <Navbar />
      <ProjectsHeader />
      <Projets />
      {/* <ProjectsContents /> */}
      <FooterAdresse />
    </div>
  );
};

export default PageProjects;
