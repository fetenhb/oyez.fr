import React from "react";
import FooterAdresse from "../HomePage/Footer/FooterAdresse";
import Navbar from "../HomePage/Navbar/Navbar";
import { Separation } from "../HomePage/Separation/Separation";
import ScrollToTop from "../ScrollToTop";
import Design from "./MethodeComponents/Design";
import HeaderMethode from "./MethodeComponents/HeaderMethode";
import Uops from "./MethodeComponents/Uops";

const PageMethode = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <HeaderMethode />
      <Uops />
      <div className="container">
        {" "}
        <Separation theme="#e1ab33" style={{ marginTop: "90px" }} />{" "}
      </div>
      <Design />
      <FooterAdresse />
    </div>
  );
};

export default PageMethode;
