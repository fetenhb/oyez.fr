import React from "react";
import DartyCuisineHeader from "./DartyCuisineComponents/DartyCuisineHeader";
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar.js";
import SectionOne from "./DartyCuisineComponents/SectionOne";

const DartyCuisine = () => {
  return (
    <div>
      <ProjectsNavbar />
      <DartyCuisineHeader />
      <SectionOne />
    </div>
  );
};

export default DartyCuisine;
