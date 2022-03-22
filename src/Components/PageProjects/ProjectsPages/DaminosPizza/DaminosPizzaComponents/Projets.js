import React from "react";
import { Link } from "react-router-dom";
import darty from "../../../../../Images/darty.jpg";
import bnp from "../../../../../Images/BNP-cover.jpg";
import { BackColumn, ImgColumn } from "../../ProjectsStyle";
const Projets = () => {
  return (
    <div style={{ display: "flex", height: "500px" }}>
      <ImgColumn className="link ">
        {" "}
        <Link to="/projets-groupe-oyez/murale-darty-cuisine">
          <BackColumn className="image" imgUrl={darty}>
            <div className="item">
              <div className="title-container">
                <span className="titleProjectTwo">
                  DARTY : Magnifier l’offre produit avec le Flagship cuisine
                  Paris Wagram{" "}
                </span>
              </div>
            </div>
          </BackColumn>
        </Link>{" "}
      </ImgColumn>

      <ImgColumn className="link " style={{ right: "0" }}>
        {" "}
        <Link to="/projets-groupe-oyez/bnp-paribas">
          <BackColumn className="image" imgUrl={bnp}>
            <div className="item">
              <div className="title-container">
                <span className="titleProjectTwo">
                  BNP : Repenser le parcours client en agence bancaire
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
