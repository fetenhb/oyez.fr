import React from "react";
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar.js";
import ButHeader from "./ButComponents/ButHeader";
import SectionOne from "./ButComponents/SectionOne.js";
import but01 from "../../../../Images/but-01.jpg";
import tabletBut from "../../../../Images/tablet-BUT.jpg";

const But = () => {
  return (
    <div>
      <ProjectsNavbar />
      <ButHeader />
      <SectionOne />
      <img src={tabletBut} style={{ width: "100%" }} />
      <img src={but01} style={{ width: "100%" }} />
    </div>
  );
};

export default But;
