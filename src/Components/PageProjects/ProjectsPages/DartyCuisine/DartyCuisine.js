import React from "react";
import DartyCuisineHeader from "./DartyCuisineComponents/DartyCuisineHeader";
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar.js";
import SectionOne from "./DartyCuisineComponents/SectionOne";
import ProjetsInteressee from "../ProjetsInteressee";
import Projets from "./DartyCuisineComponents/Projets";
import ProjetsFooter from "../ProjetsFooter";

const DartyCuisine = () => {
  return (
    <div>
      <ProjectsNavbar />
      <DartyCuisineHeader />
      <SectionOne />
      <ProjetsInteressee />
      <Projets />
      <ProjetsFooter />
    </div>
  );
};

export default DartyCuisine;
