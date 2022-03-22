import React from "react";
import { Link } from "react-router-dom";
import { BackColumn, ImgColumn } from "../../ProjectsStyle";
import infinity from "../../../../../Images/infinity1.gif";
import mh from "../../../../../Images/M-H-cover.jpg";

const Projets = () => {
  return (
    <div style={{ display: "flex", height: "500px" }}>
      <ImgColumn className="link ">
        {" "}
        <Link to="/projets-groupe-oyez/moet-hennessy">
          <BackColumn className="image" imgUrl={mh}>
            <div className="item">
              <div className="title-container">
                <span className="titleProjectTwo">
                  MOËT HENNESSY : Optimiser les opérations travel retail au
                  niveau mondial{" "}
                </span>
              </div>
            </div>
          </BackColumn>
        </Link>{" "}
      </ImgColumn>

      <ImgColumn className="link " style={{ right: "0" }}>
        {" "}
        <Link to="/projets-groupe-oyez/infiniti">
          <BackColumn className="image" imgUrl={infinity}>
            <div className="item">
              <div className="title-container">
                <span className="titleProjectTwo">
                  INFINITI : Repenser l’accueil et l’attente en concession
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
