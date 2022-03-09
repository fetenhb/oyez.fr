import React from "react";
import FooterAdresse from "../HomePage/Footer/FooterAdresse";
import Navbar from "../HomePage/Navbar/Navbar";
import { Separation } from "../HomePage/Separation/Separation";
import CommerceUnifie from "./HeaderExpertises/CommerceUnifie";
import DataCreativite from "./HeaderExpertises/DataCreativite";
import HeaderExpertises from "./HeaderExpertises/HeaderExpertises";

const PageExpertises = () => {
  return (
    <div>
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
      <DataCreativite />
      <FooterAdresse />
    </div>
  );
};

export default PageExpertises;
