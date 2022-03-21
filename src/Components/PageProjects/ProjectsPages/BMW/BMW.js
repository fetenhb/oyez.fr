import React from "react";
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar.js";
import BmwHeader from "./BmwComponents/BmwHeader.js";
import SectionOne from "./BmwComponents/SectionOne.js";
import bmw01 from "../../../../Images/bmw-01.jpg";
import SectionTwo from "./BmwComponents/SectionTwo.js";
import bmw03 from "../../../../Images/bmw-03.jpg";
import SectionThree from "./BmwComponents/SectionThree.js";
import Projets from "./BmwComponents/Projets.js";

const BMW = () => {
  return (
    <div>
      <ProjectsNavbar />
      <BmwHeader />
      <SectionOne />
      <img src={bmw01} style={{ width: "100%" }} />
      <SectionTwo />
      <img src={bmw03} style={{ width: "100%" }} />
      <SectionThree />
      <Projets />
    </div>
  );
};

export default BMW;
