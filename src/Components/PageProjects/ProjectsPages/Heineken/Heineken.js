import React from "react";
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar.js";
import HeinekenHeader from "./HeinekenComponents/HeinekenHeader.js";
import SectionOne from "./HeinekenComponents/SectionOne.js";
import Heinekeen from "../../../../Images/Heineken-01.jpg";
import SectionTwo from "./HeinekenComponents/SectionTwo.js";

const Heineken = () => {
  return (
    <div>
      <ProjectsNavbar />
      <HeinekenHeader />
      <SectionOne />
      <img src={Heinekeen} style={{ width: "100%" }} />
      <SectionTwo />
    </div>
  );
};

export default Heineken;
