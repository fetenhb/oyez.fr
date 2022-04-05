import React from "react";
import FooterAdresse from "../HomePage/Footer/FooterAdresse";
import Navbar from "../HomePage/Navbar/Navbar";
import ScrollToTop from "../ScrollToTop";
import HeaderMedias from "./MediasComponents/HeaderMedias";
import MediasContents from "./MediasComponents/MediasContents";

const PageMedias = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <HeaderMedias />
      <MediasContents />
      <FooterAdresse />
    </div>
  );
};

export default PageMedias;
