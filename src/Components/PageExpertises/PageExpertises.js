import React from "react";
import FooterAdresse from "../HomePage/Footer/FooterAdresse";
import Navbar from "../HomePage/Navbar/Navbar";
import { Separation } from "../HomePage/Separation/Separation";
import ScrollToTop from "../ScrollToTop";
import CommerceUnifie from "./ExpertisesComponents/CommerceUnifie";
import DataCreativite from "./ExpertisesComponents/DataCreativite";
import HeaderExpertises from "./ExpertisesComponents/HeaderExpertises";
import Marketing from "./ExpertisesComponents/Marketing";

const PageExpertises = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <HeaderExpertises />{" "}
      <div className="container">
        {" "}
        <Separation theme="#D43A75" style={{ marginTop: "90px" }} />{" "}
      </div>
      <CommerceUnifie />{" "}
      <div className="container">
        {" "}
        <Separation theme="#D43A75" style={{ marginTop: "90px" }} />{" "}
      </div>
      <Marketing />
      <div className="container">
        {" "}
        <Separation theme="#D43A75" style={{ marginTop: "90px" }} />{" "}
      </div>
      <DataCreativite />
      <FooterAdresse />
    </div>
  );
};

export default PageExpertises;
