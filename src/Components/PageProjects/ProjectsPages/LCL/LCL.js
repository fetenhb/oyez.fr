import React from "react";
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar.js";
import ProjetsFooter from "../ProjetsFooter.js";
import ProjetsInteressee from "../ProjetsInteressee.js";
import LclCarousel from "./LclComponents/LclCarousel.js";
import LclHeader from "./LclComponents/LclHeader.js";
import Projets from "./LclComponents/Projets.js";
import SectionOne from "./LclComponents/SectionOne.js";

const LCL = () => {
  return (
    <div>
      {" "}
      <ProjectsNavbar />
      <LclHeader />
      <SectionOne />
      <LclCarousel />
      <ProjetsInteressee />
      <Projets />
      <ProjetsFooter />
    </div>
  );
};

export default LCL;
