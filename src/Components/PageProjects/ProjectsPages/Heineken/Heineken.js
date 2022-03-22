import React from "react";
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar.js";
import HeinekenHeader from "./HeinekenComponents/HeinekenHeader.js";
import SectionOne from "./HeinekenComponents/SectionOne.js";
import Heinekeen from "../../../../Images/Heineken-01.jpg";
import SectionTwo from "./HeinekenComponents/SectionTwo.js";
import ProjetsInteressee from "../ProjetsInteressee.js";
import Projets from "./HeinekenComponents/Projets.js";
import ProjetsFooter from "../ProjetsFooter.js";

const Heineken = () => {
  return (
    <div>
      <ProjectsNavbar />
      <HeinekenHeader />
      <SectionOne />
      <img src={Heinekeen} style={{ width: "100%" }} />
      <SectionTwo />
      <ProjetsInteressee />
      <Projets />
      <ProjetsFooter />
    </div>
  );
};

export default Heineken;
