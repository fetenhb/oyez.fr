import React from "react";
import { Link } from "react-router-dom";
import pizza from "../../../../../Images/DOMINOSPIZZA-cover.jpg";
import saint from "../../../../../Images/saint.jpg";

import { BackColumn, ImgColumn } from "../../ProjectsStyle";
const Projets = () => {
  return (
    <div style={{ display: "flex", height: "500px" }}>
      <ImgColumn className="link ">
        {" "}
        <Link to="/projets-groupe-oyez/dominos-pizza">
          <BackColumn className="image" imgUrl={pizza}>
            <div className="item">
              <div className="title-container">
                <span className="titleProjectTwo">
                  DOMINO’S PIZZA : menu-board connecté{" "}
                </span>
              </div>
            </div>
          </BackColumn>
        </Link>{" "}
      </ImgColumn>

      <ImgColumn className="link " style={{ right: "0" }}>
        {" "}
        <Link to="/projets-groupe-oyez/saint-laurent">
          <BackColumn className="image" imgUrl={saint}>
            <div className="item">
              <div className="title-container">
                <span className="titleProjectTwo">
                  SAINT LAURENT : Inspirer et fidéliser les clients
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
