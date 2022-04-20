import React from "react";
import mdm from "../../../../../Images/MDM-cover2.jpg";
import infinity from "../../../../../Images/infinity1.gif";
import "../../../ProjectsComponents/ProjectsContent.scss";
import { ImgColumn, BackColumn } from "../../ProjectsStyle";
import { Link } from "react-router-dom";

const Projets = () => {
  return (
    <>
      <div style={{ display: "flex", height: "500px" }}>
        <ImgColumn className="link ">
          <Link to="/projets-groupe-oyez/infiniti">
            {" "}
            <BackColumn className="image" imgUrl={infinity}>
              <div className="item">
                <div className="title-container">
                  <span className="titleProjectTwo">
                    INFINITI : Repenser l’accueil et l’attente en concession
                  </span>
                </div>
              </div>
            </BackColumn>
          </Link>{" "}
        </ImgColumn>

        <ImgColumn className="link " style={{ right: "0" }}>
          <Link to="/projets-groupe-oyez/maisons-du-monde">
            {" "}
            <BackColumn className="image" imgUrl={mdm}>
              <div className="item">
                <div className="title-container">
                  <span className="titleProjectTwo">
                    MAISONS DU MONDE : Catalogues et conseillers augmentés{" "}
                  </span>
                </div>
              </div>{" "}
            </BackColumn>
          </Link>{" "}
        </ImgColumn>
      </div>
    </>
  );
};

export default Projets;
