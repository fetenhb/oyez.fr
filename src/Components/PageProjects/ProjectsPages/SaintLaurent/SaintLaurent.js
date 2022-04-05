import React from "react";
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar.js";
import SaintLaurentHeader from "./SaintLaurentComponents/SaintLaurentHeader.js";
import SectionOne from "./SaintLaurentComponents/SectionOne.js";
import SaintLaur from "../../../../Images/saint-laurent01.jpg";
import SectionTwo from "./SaintLaurentComponents/SectionTwo.js";
import ProjetsInteressee from "../ProjetsInteressee.js";
import Projets from "./SaintLaurentComponents/Projets.js";
import ProjetsFooter from "../ProjetsFooter.js";
import ScrollToTop from "../../../ScrollToTop.js";
const SaintLaurent = () => {
  return (
    <div>
      <ScrollToTop />
      <ProjectsNavbar />
      <SaintLaurentHeader />
      <SectionOne />
      <img src={SaintLaur} style={{ width: "100%" }} />
      <SectionTwo />
      <ProjetsInteressee />
      <Projets />
      <ProjetsFooter />
    </div>
  );
};

export default SaintLaurent;
