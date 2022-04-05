import React from "react";
import FooterAdresse from "../HomePage/Footer/FooterAdresse";
import Navbar from "../HomePage/Navbar/Navbar";
import ScrollToTop from "../ScrollToTop";
import FormationHeader from "./FormationComponents/FormationHeader";
import SectionOne from "./FormationComponents/SectionOne";
import SectionTwo from "./FormationComponents/SectionTwo";

const PageFormation = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <FormationHeader />
      <SectionOne />
      <SectionTwo />
      <FooterAdresse />
    </div>
  );
};

export default PageFormation;
