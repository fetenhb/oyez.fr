import React from "react";
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar.js";
import SaintLaurentHeader from "./SaintLaurentComponents/SaintLaurentHeader.js";
import SectionOne from "./SaintLaurentComponents/SectionOne.js";
import SaintLaur from "../../../../Images/saint-laurent01.jpg";
import SectionTwo from "./SaintLaurentComponents/SectionTwo.js";
const SaintLaurent = () => {
  return (
    <div>
      <ProjectsNavbar />
      <SaintLaurentHeader />
      <SectionOne />
      <img src={SaintLaur} style={{ width: "100%" }} />
      <SectionTwo />
    </div>
  );
};

export default SaintLaurent;
