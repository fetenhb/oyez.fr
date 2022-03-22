import React from "react";
import { Link } from "react-router-dom";
import fnac from "../../../../../Images/fnac_darty.gif";
import { BackColumn, ImgColumn } from "../../ProjectsStyle";

const Projets = () => {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <ImgColumn className="link ">
        {" "}
        <Link to="/projets-groupe-oyez/retail-vendeurs-connectes-commerce-unifie">
          <BackColumn className="image" imgUrl={fnac}>
            <div className="item">
              <div className="title-container">
                <span className="titleProjectTwo">
                  DARTY : Créer un parcours client sans file d’attente avec le
                  paiement mobile{" "}
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
