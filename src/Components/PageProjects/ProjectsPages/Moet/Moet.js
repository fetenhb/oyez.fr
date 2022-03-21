import React from "react";
import MoetHeader from "./MoetComponents/MoetHeader";
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar.js";
import SectionOne from "./MoetComponents/SectionOne";
import moett from "../../../../Images/MH.jpg";

const Moet = () => {
  return (
    <div>
      <ProjectsNavbar />
      <MoetHeader />
      <SectionOne />
      <div style={{ textAlign: "center", marginBottom: "100px" }}>
        {" "}
        <img src={moett} style={{ width: "60%" }} />
      </div>
    </div>
  );
};

export default Moet;
