import React from "react";
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar.js";
import ProjetsFooter from "../ProjetsFooter.js";
import ProjetsInteressee from "../ProjetsInteressee.js";
import DartyHeader from "./DartyComponents/DartyHeader.js";
import Progress from "./DartyComponents/Progress.js";
import Projets from "./DartyComponents/Projets.js";
import SectionOne from "./DartyComponents/SectionOne.js";
import SectionThree from "./DartyComponents/SectionThree.js";
import SectionTwo from "./DartyComponents/SectionTwo.js";
import SlideImage from "./DartyComponents/SlideImage.js";

const Darty = () => {
  return (
    <div>
      <ProjectsNavbar />
      <DartyHeader />
      <SectionOne />

      <SlideImage />
      <SectionTwo />
      <Progress />
      <SectionThree />
      <ProjetsInteressee />
      <Projets />
      <ProjetsFooter />
    </div>
  );
};

export default Darty;
