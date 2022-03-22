import React from "react";
import { Link } from "react-router-dom";
import { BackColumn, ImgColumn } from "../../ProjectsStyle";
import but from "../../../../../Images/butt.gif";
import mdm from "../../../../../Images/MDM-cover2.jpg";

const Projets = () => {
  return (
    <div style={{ display: "flex", height: "500px" }}>
      <ImgColumn className="link ">
        {" "}
        <Link to="/projets-groupe-oyez/maisons-du-monde">
          <BackColumn className="image" imgUrl={mdm}>
            <div className="item">
              <div className="title-container">
                <span className="titleProjectTwo">
                  MAISONS DU MONDE : Catalogues et conseillers augmentés{" "}
                </span>
              </div>
            </div>
          </BackColumn>
        </Link>{" "}
      </ImgColumn>

      <ImgColumn className="link " style={{ right: "0" }}>
        {" "}
        <Link to="/projets-groupe-oyez/but">
          <BackColumn className="image" imgUrl={but}>
            <div className="item">
              <div className="title-container">
                <span className="titleProjectTwo">
                  BUT : Digitaliser pour réduire les surfaces d’exposition en
                  magasin{" "}
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
