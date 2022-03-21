import React from "react";
import CarrefourHeader from "./CarrefourComponents/CarrefourHeader";
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar.js";
import SectionOne from "./CarrefourComponents/SectionOne";
import carrefourCover from "../../../../Images/carrefour-cover.png";
import SectionTwo from "./CarrefourComponents/SectionTwo";
import SectionThree from "./CarrefourComponents/SectionThree";

const Carrefour = () => {
  return (
    <div>
      <ProjectsNavbar />
      <CarrefourHeader />
      <SectionOne />
      <div style={{ marginBottom: "100px", textAlign: "center" }}>
        {" "}
        <img src={carrefourCover} style={{ width: "auto" }} />
      </div>
      <SectionTwo />
      <SectionThree />
    </div>
  );
};

export default Carrefour;
