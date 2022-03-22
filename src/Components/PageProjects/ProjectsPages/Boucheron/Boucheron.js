import React from "react";
import BoucheronHeader from "./BoucheronComponents/BoucheronHeader";
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar.js";
import SectionOne from "./BoucheronComponents/SectionOne";
import boucheron01 from "../../../../Images/boucheron-01.jpg";
import SectionTwo from "./BoucheronComponents/SectionTwo";
import boucheron02 from "../../../../Images/boucheron-02.jpg";
import boucheron03 from "../../../../Images/boucheron-03.jpg";
import ProjetsInteressee from "../ProjetsInteressee";
import Projets from "./BoucheronComponents/Projets";
import ProjetsFooter from "../ProjetsFooter";

const Boucheron = () => {
  return (
    <div>
      <ProjectsNavbar />
      <BoucheronHeader />
      <SectionOne />
      <img src={boucheron01} style={{ width: "100%" }} />
      <SectionTwo />
      <img src={boucheron02} style={{ width: "100%" }} />
      <img src={boucheron03} style={{ width: "100%" }} />
      <ProjetsInteressee />
      <Projets />
      <ProjetsFooter />
    </div>
  );
};

export default Boucheron;
