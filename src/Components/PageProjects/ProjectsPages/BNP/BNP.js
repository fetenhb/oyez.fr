import React, { useEffect } from "react";
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar.js";
import BnpHeader from "./BnpComponents/BnpHeader.js";
import SectionOne from "./BnpComponents/SectionOne.js";
import BNP01 from "../../../../Images/BNP-01.png";
import SectionThree from "./BnpComponents/SectionThree.js";
import BNP02 from "../../../../Images/BNP-02.jpg";
import ProjetsInteressee from "../ProjetsInteressee.js";
import Projets from "./BnpComponents/Projets.js";
import ProjetsFooter from "../ProjetsFooter.js";
import Counter from "./BnpComponents/Counter.js";
import ScrollToTop from "../../../ScrollToTop.js";

const BNP = () => {
  return (
    <div>
      <ScrollToTop />
      <ProjectsNavbar />
      <BnpHeader />
      <SectionOne />
      <img src={BNP01} style={{ width: "100%" }} />
      <Counter />
      <SectionThree />
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <img src={BNP02} style={{ width: "60%" }} />
      </div>

      <ProjetsInteressee />
      <Projets />
      <ProjetsFooter />
    </div>
  );
};

export default BNP;
