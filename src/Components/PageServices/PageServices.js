import React from "react";
import FooterAdresse from "../HomePage/Footer/FooterAdresse";
import Navbar from "../HomePage/Navbar/Navbar";
import { Separation } from "../HomePage/Separation/Separation";
import Consulting from "./ServicesComponents/Consulting";
import DigitalCustomer from "./ServicesComponents/DigitalCustomer";
import Engineering from "./ServicesComponents/Engineering";
import ServicesHeader from "./ServicesComponents/ServicesHeader";

const PageServices = () => {
  return (
    <div>
      <Navbar />
      <ServicesHeader />
      <Engineering />
      <div className="container">
        {" "}
        <Separation theme="#0070c7" style={{ marginTop: "90px" }} />{" "}
      </div>
      <DigitalCustomer />{" "}
      <div className="container">
        {" "}
        <Separation theme="#0070c7" style={{ marginTop: "90px" }} />{" "}
      </div>
      <Consulting />
      <FooterAdresse />
    </div>
  );
};

export default PageServices;
