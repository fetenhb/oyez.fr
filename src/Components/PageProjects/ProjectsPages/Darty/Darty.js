import React from "react";
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar.js";
import ProjetsFooter from "../ProjetsFooter.js";
import ProjetsInteressee from "../ProjetsInteressee.js";
import DartyHeader from "./DartyComponents/DartyHeader.js";
import Projets from "./DartyComponents/Projets.js";

const Darty = () => {
  return (
    <div>
      <ProjectsNavbar />
      <DartyHeader />
      <ProjetsInteressee />
      <Projets />
      <ProjetsFooter />
    </div>
  );
};

export default Darty;
