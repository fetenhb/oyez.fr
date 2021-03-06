import React from "react";
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar.js";
import MaisonsMondeHeader from "./MaisonMondeComponents/MaisonsMondeHeader.js";
import SectionOne from "./MaisonMondeComponents/SectionOne.js";
import MDM01 from "../../../../Images/MDM-01.jpg";
import SectionTwo from "./MaisonMondeComponents/SectionTwo.js";
import MDM02 from "../../../../Images/MDM-02.jpg";
import ProjetsInteressee from "../ProjetsInteressee.js";
import Projets from "./MaisonMondeComponents/Projets.js";
import ProjetsFooter from "../ProjetsFooter.js";
import ScrollToTop from "../../../ScrollToTop.js";

const MaisonsMonde = () => {
  return (
    <div>
      <ScrollToTop />
      <ProjectsNavbar />
      <MaisonsMondeHeader />
      <SectionOne />
      <img src={MDM01} style={{ width: "100%" }} />
      <SectionTwo />
      <img src={MDM02} style={{ width: "100%" }} />
      <ProjetsInteressee />
      <Projets />
      <ProjetsFooter />
    </div>
  );
};

export default MaisonsMonde;
