import React from "react";
import MoetHeader from "./MoetComponents/MoetHeader";
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar.js";
import SectionOne from "./MoetComponents/SectionOne";
import moett from "../../../../Images/MH.jpg";
import ProjetsInteressee from "../ProjetsInteressee";
import Projets from "./MoetComponents/Projets";
import ProjetsFooter from "../ProjetsFooter";
import ScrollToTop from "../../../ScrollToTop";

const Moet = () => {
  return (
    <div>
      <ScrollToTop />
      <ProjectsNavbar />
      <MoetHeader />
      <SectionOne />
      <div style={{ textAlign: "center", marginBottom: "100px" }}>
        {" "}
        <img src={moett} style={{ width: "60%" }} />
      </div>
      <ProjetsInteressee />
      <Projets />
      <ProjetsFooter />
    </div>
  );
};

export default Moet;
