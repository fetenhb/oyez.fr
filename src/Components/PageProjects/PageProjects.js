import React from "react";
import FooterAdresse from "../HomePage/Footer/FooterAdresse";
import ScrollToTop from "../ScrollToTop";
import ProjectsHeader from "./ProjectsComponents/ProjectsHeader";
import Projets from "./ProjectsComponents/Projets";
import Navbar from "./ProjectsPages/ProjectsNavbar/ProjectsNavbar";

const PageProjects = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <ProjectsHeader />
      <Projets />
      <FooterAdresse />
    </div>
  );
};

export default PageProjects;
