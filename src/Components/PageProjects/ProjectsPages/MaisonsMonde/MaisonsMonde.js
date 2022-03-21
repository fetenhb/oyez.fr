import React from "react";
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar.js";
import MaisonsMondeHeader from "./MaisonMondeComponents/MaisonsMondeHeader.js";
import SectionOne from "./MaisonMondeComponents/SectionOne.js";
import MDM01 from "../../../../Images/MDM-01.jpg";
import SectionTwo from "./MaisonMondeComponents/SectionTwo.js";
import MDM02 from "../../../../Images/MDM-02.jpg";

const MaisonsMonde = () => {
  return (
    <div>
      <ProjectsNavbar />
      <MaisonsMondeHeader />
      <SectionOne />
      <img src={MDM01} style={{ width: "100%" }} />
      <SectionTwo />
      <img src={MDM02} style={{ width: "100%" }} />
    </div>
  );
};

export default MaisonsMonde;
