import React from "react";
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar.js";
import ProjetsFooter from "../ProjetsFooter.js";
import ProjetsInteressee from "../ProjetsInteressee.js";
import LclHeader from "./LclComponents/LclHeader.js";
import Projets from "./LclComponents/Projets.js";

const LCL = () => {
  return (
    <div>
      {" "}
      <ProjectsNavbar />
      <LclHeader />
      <ProjetsInteressee />
      <Projets />
      <ProjetsFooter />
    </div>
  );
};

export default LCL;
