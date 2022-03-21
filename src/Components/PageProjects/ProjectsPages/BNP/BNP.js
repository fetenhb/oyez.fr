import React, { useEffect } from "react";
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar.js";
import BnpHeader from "./BnpComponents/BnpHeader.js";
import SectionOne from "./BnpComponents/SectionOne.js";
import BNP01 from "../../../../Images/BNP-01.png";
import SectionTwo from "./BnpComponents/SectionTwo.js";
import SectionThree from "./BnpComponents/SectionThree.js";
import BNP02 from "../../../../Images/BNP-02.jpg";

const BNP = () => {
  return (
    <div>
      <ProjectsNavbar />
      <BnpHeader />
      <SectionOne />
      <img src={BNP01} style={{ width: "100%" }} />
      <SectionTwo />
      <SectionThree />
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <img src={BNP02} style={{ width: "50%" }} />
      </div>
    </div>
  );
};

export default BNP;
