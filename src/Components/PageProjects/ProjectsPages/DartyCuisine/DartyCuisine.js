import React from "react";
import DartyCuisineHeader from "./DartyCuisineComponents/DartyCuisineHeader";
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar.js";
import SectionOne from "./DartyCuisineComponents/SectionOne";
import ProjetsInteressee from "../ProjetsInteressee";
import Projets from "./DartyCuisineComponents/Projets";
import ProjetsFooter from "../ProjetsFooter";
import SlideImage from "./DartyCuisineComponents/SlideImage";
import Gallery from "./DartyCuisineComponents/Gallery";
import SectionTwo from "./DartyCuisineComponents/SectionTwo";
import { EspaceVide } from "../ProjectsStyle";
import ScrollToTop from "../../../ScrollToTop";

const DartyCuisine = () => {
  return (
    <div>
      <ScrollToTop />
      <ProjectsNavbar />
      <DartyCuisineHeader />
      <SectionOne />
      <SlideImage />
      <SectionTwo />
      <Gallery />
      <EspaceVide />
      <ProjetsInteressee />
      <Projets />
      <ProjetsFooter />
    </div>
  );
};

export default DartyCuisine;
