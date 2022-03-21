import React from "react";
import DaminosPizzaHeader from "./DaminosPizzaComponents/DaminosPizzaHeader";
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar.js";
import SectionOne from "./DaminosPizzaComponents/SectionOne";
import dominos02 from "../../../../Images/dominos02.jpg";
import SectionTwo from "./DaminosPizzaComponents/SectionTwo";
import dominos01bis from "../../../../Images/dominos01bis.jpg";
import { PizzaImg } from "../ProjectsStyle";

const DaminosPizza = () => {
  return (
    <div>
      <ProjectsNavbar />
      <DaminosPizzaHeader />
      <SectionOne />
      <img src={dominos02} style={{ width: "100%" }} />
      <SectionTwo />
      <PizzaImg />
    </div>
  );
};

export default DaminosPizza;
