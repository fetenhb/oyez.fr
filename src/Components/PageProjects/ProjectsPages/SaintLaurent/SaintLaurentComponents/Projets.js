import React from "react";
import { Link } from "react-router-dom";
import mh from "../../../../../Images/M-H-cover.jpg";
import bnp from "../../../../../Images/BNP-cover.jpg";
import { BackColumn, ImgColumn } from "../../ProjectsStyle";
const Projets = () => {
  return (
    <div style={{ display: "flex", height: "500px" }}>
      <ImgColumn className="link ">
        {" "}
        <Link to="/projets-groupe-oyez/bnp-paribas">
          <BackColumn className="image" imgUrl={bnp}>
            <div className="item">
              <div className="title-container">
                <span className="titleProjectTwo">
                  BNP : Repenser le parcours client en agence bancaire
                </span>
              </div>
            </div>
          </BackColumn>
        </Link>{" "}
      </ImgColumn>

      <ImgColumn className="link " style={{ right: "0" }}>
        {" "}
        <Link to="/projets-groupe-oyez/moet-hennessy">
          <BackColumn className="image" imgUrl={mh}>
            <div className="item">
              <div className="title-container">
                <span className="titleProjectTwo">
                  MOËT HENNESSY : Optimiser les opérations travel retail au
                  niveau mondial
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
