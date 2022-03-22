import React from "react";
import { Link } from "react-router-dom";
import { BackColumn, ImgColumn } from "../../ProjectsStyle";
import boucheron from "../../../../../Images/boucheron-1.jpg";
import saint from "../../../../../Images/saint.jpg";

const Projets = () => {
  return (
    <div style={{ display: "flex", height: "500px" }}>
      <ImgColumn className="link ">
        {" "}
        <Link to="/projets-groupe-oyez/saint-laurent">
          <BackColumn className="image" imgUrl={saint}>
            <div className="item">
              <div className="title-container">
                <span className="titleProjectTwo">
                  SAINT LAURENT : Inspirer et fidéliser les clients
                </span>
              </div>
            </div>
          </BackColumn>
        </Link>{" "}
      </ImgColumn>

      <ImgColumn className="link " style={{ right: "0" }}>
        {" "}
        <Link to="/projets-groupe-oyez/boucheron">
          <BackColumn className="image" imgUrl={boucheron}>
            <div className="item">
              <div className="title-container">
                <span className="titleProjectTwo">
                  BOUCHERON : Apporter un meilleur service aux clients dans le
                  monde entier
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
