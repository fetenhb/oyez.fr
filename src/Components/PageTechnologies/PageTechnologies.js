import React from "react";
import FooterAdresse from "../HomePage/Footer/FooterAdresse";
import Navbar from "../HomePage/Navbar/Navbar";
import ScrollToTop from "../ScrollToTop";
import Api from "./TechnologiesComponents/Api";
import Approche from "./TechnologiesComponents/Approche";
import Cloud from "./TechnologiesComponents/Cloud";
import HeaderTechnologies from "./TechnologiesComponents/HeaderTechnologies";
import Microservices from "./TechnologiesComponents/Microservices";

const PageTechnologies = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <HeaderTechnologies />
      <Approche />
      <Cloud />
      <Microservices />
      <Api />
      <FooterAdresse />
    </div>
  );
};

export default PageTechnologies;
