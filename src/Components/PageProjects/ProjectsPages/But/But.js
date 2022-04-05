import React from "react";
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar.js";
import ButHeader from "./ButComponents/ButHeader";
import SectionOne from "./ButComponents/SectionOne.js";
import but01 from "../../../../Images/but-01.jpg";
import tabletBut from "../../../../Images/tablet-BUT.jpg";
import ProjetsInteressee from "../ProjetsInteressee.js";
import Projets from "./ButComponents/Projets.js";
import ProjetsFooter from "../ProjetsFooter.js";
import Counter from "./ButComponents/Counter.js";
import ButCarousel from "./ButComponents/ButCarousel.js";
import ScrollToTop from "../../../ScrollToTop.js";

const But = () => {
  return (
    <div>
      <ScrollToTop />
      <ProjectsNavbar />
      <ButHeader />
      <SectionOne />
      <img src={tabletBut} style={{ width: "100%" }} />
      <img src={but01} style={{ width: "100%", marginBottom: "100px" }} />
      <ButCarousel />
      <Counter />
      <ProjetsInteressee />
      <Projets />
      <ProjetsFooter />
    </div>
  );
};

export default But;
