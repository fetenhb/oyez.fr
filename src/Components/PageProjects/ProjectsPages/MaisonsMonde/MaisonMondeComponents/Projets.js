import React from "react";
import { Link } from "react-router-dom";
import { BackColumn, ImgColumn } from "../../ProjectsStyle";
import bmww from "../../../../../Images/bmww.jpg";
import lcl from "../../../../../Images/lcl-cover.jpg";

const Projets = () => {
  return (
    <div style={{ display: "flex", height: "500px" }}>
      <ImgColumn className="link ">
        {" "}
        <Link to="/projets-groupe-oyez/bmw">
          <BackColumn className="image" imgUrl={bmww}>
            <div className="item">
              <div className="title-container">
                <span className="titleProjectTwo">
                  BMW : Immerger le client dans l’univers de marque
                </span>
              </div>
            </div>
          </BackColumn>
        </Link>{" "}
      </ImgColumn>

      <ImgColumn className="link " style={{ right: "0" }}>
        {" "}
        <Link to="/projets-groupe-oyez/lcl">
          <BackColumn className="image" imgUrl={lcl}>
            <div className="item">
              <div className="title-container">
                <span className="titleProjectTwo">
                  LCL : Incarner la transformation du groupe à travers ses
                  agences « Cathédrale »
                </span>
              </div>
            </div>{" "}
          </BackColumn>
        </Link>{" "}
      </ImgColumn>
    </div>
  );
};

export default Projets;
