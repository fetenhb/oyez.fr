import React from "react";
import { Link } from "react-router-dom";
import fnac from "../../../../../Images/fnac_darty.gif";
import lcl from "../../../../../Images/lcl-cover.jpg";
import { BackColumn, ImgColumn } from "../../ProjectsStyle";

const Projets = () => {
  return (
    <div style={{ display: "flex", height: "500px" }}>
      <ImgColumn className="link ">
        {" "}
        <Link to="/projets-groupe-oyez/infiniti">
          <BackColumn className="image" imgUrl={lcl}>
            <div className="item">
              <div className="title-container">
                <span className="titleProjectTwo">
                  LCL : Incarner la transformation du groupe à travers ses
                  agences « Cathédrale »{" "}
                </span>
              </div>
            </div>
          </BackColumn>
        </Link>{" "}
      </ImgColumn>

      <ImgColumn className="link " style={{ right: "0" }}>
        <Link to="/projets-groupe-oyez/maisons-du-monde">
          {" "}
          <BackColumn className="image" imgUrl={fnac}>
            <div className="item">
              <div className="title-container">
                <span className="titleProjectTwo">
                  DARTY : Créer un parcours client sans file d’attente avec le
                  paiement mobile{" "}
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
