import React from "react";
import { Link } from "react-router-dom";
import darty from "../../../../../Images/darty.jpg";
import { BackColumn, ImgColumn } from "../../ProjectsStyle";
const Projets = () => {
  return (
    <div style={{ width: "100%", height: "500px" }}>
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
    </div>
  );
};

export default Projets;
