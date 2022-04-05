import React from "react";
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar.js";
import BmwHeader from "./BmwComponents/BmwHeader.js";
import SectionOne from "./BmwComponents/SectionOne.js";
import bmw01 from "../../../../Images/bmw-01.jpg";
import SectionTwo from "./BmwComponents/SectionTwo.js";
import bmw03 from "../../../../Images/bmw-03.jpg";
import SectionThree from "./BmwComponents/SectionThree.js";
import Projets from "./BmwComponents/Projets.js";
import ProjetsFooter from "../ProjetsFooter.js";
import ProjetsInteressee from "../ProjetsInteressee.js";
import bmwVitrine from "../../../../Images/bmw-vitrine.jpg";
import Counter from "./BmwComponents/Counter.js";
import SectionFour from "./BmwComponents/SectionFour.js";
import { EspaceVide } from "../ProjectsStyle.js";
import ScrollToTop from "../../../ScrollToTop.js";

const BMW = () => {
  return (
    <div>
      <ScrollToTop />
      <ProjectsNavbar />
      <BmwHeader />
      <SectionOne />
      <img src={bmw01} style={{ width: "100%" }} />
      <SectionTwo />
      <Counter />
      <img src={bmw03} style={{ width: "100%" }} />
      <SectionThree />
      <SectionFour />
      <img src={bmwVitrine} style={{ width: "100%" }} />
      <EspaceVide />
      <ProjetsInteressee />
      <Projets />
      <ProjetsFooter />
    </div>
  );
};

export default BMW;
