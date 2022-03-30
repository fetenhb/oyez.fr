import React from "react";
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar.js";
import ProjetsFooter from "../ProjetsFooter.js";
import ProjetsInteressee from "../ProjetsInteressee.js";
import LclCarousel from "./LclComponents/LclCarousel.js";
import LclHeader from "./LclComponents/LclHeader.js";
import Projets from "./LclComponents/Projets.js";
import SectionOne from "./LclComponents/SectionOne.js";
import SectionTwo from "./LclComponents/SectionTwo.js";
import lclParallax from "../../../../Images/lcl-parallax.jpg";
import SectionThree from "./LclComponents/SectionThree.js";
import lcl02 from "../../../../Images/lcl-02.jpg";

const LCL = () => {
  return (
    <div>
      {" "}
      <ProjectsNavbar />
      <LclHeader />
      <SectionOne />
      <LclCarousel />
      <SectionTwo />
      <img src={lclParallax} style={{ width: "100%", height: "600px" }} />
      <SectionThree />
      <img src={lcl02} style={{ width: "100%" }} />
      <ProjetsInteressee />
      <Projets />
      <ProjetsFooter />
    </div>
  );
};

export default LCL;
