import React from "react";
import InfinitiHeader from "./InfinitiComponents/InfinitiHeader";
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar.js";
import SectionOne from "./InfinitiComponents/SectionOne";
import infiniti01 from "../../../../Images/infiniti-01.jpg";
import SectionTwo from "./InfinitiComponents/SectionTwo";
import { InfinitiImg } from "../ProjectsStyle";
import ProjetsInteressee from "../ProjetsInteressee";
import Projets from "./InfinitiComponents/Projets";
import ProjetsFooter from "../ProjetsFooter";
import ScrollToTop from "../../../ScrollToTop";

const Infiniti = () => {
  return (
    <div>
      {" "}
      <ScrollToTop />
      <ProjectsNavbar />
      <InfinitiHeader />
      <SectionOne />
      <img src={infiniti01} style={{ width: "100%" }} />
      <SectionTwo />
      <InfinitiImg />
      <ProjetsInteressee />
      <Projets />
      <ProjetsFooter />
    </div>
  );
};

export default Infiniti;
