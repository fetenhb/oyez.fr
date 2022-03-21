import React from "react";
import FooterAdresse from "../HomePage/Footer/FooterAdresse";
import Navbar from "../HomePage/Navbar/Navbar";
import HeaderMedias from "./MediasComponents/HeaderMedias";
import MediasContents from "./MediasComponents/MediasContents";

const PageMedias = () => {
  return (
    <div>
      <Navbar />
      <HeaderMedias />
      <MediasContents />
      <FooterAdresse />
    </div>
  );
};

export default PageMedias;
