import React from "react";
import FooterAdresse from "../HomePage/Footer/FooterAdresse";
import Navbar from "../HomePage/Navbar/Navbar";
import HeaderExpertises from "./HeaderExpertises/HeaderExpertises";

const PageExpertises = () => {
  return (
    <div style={{ display: "block" }}>
      <Navbar />
      <HeaderExpertises />

      {/* <FooterAdresse /> */}
    </div>
  );
};

export default PageExpertises;
