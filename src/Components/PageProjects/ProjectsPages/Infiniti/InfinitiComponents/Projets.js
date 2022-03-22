import React from "react";
import { Link } from "react-router-dom";
import { BackColumn, ImgColumn } from "../../ProjectsStyle";
import boucheron from "../../../../../Images/boucheron-1.jpg";
import bmww from "../../../../../Images/bmww.jpg";

const Projets = () => {
  return (
    <div style={{ display: "flex", height: "500px" }}>
      <ImgColumn className="link ">
        {" "}
        <Link to="/projets-groupe-oyez/boucheron">
          <BackColumn className="image" imgUrl={boucheron}>
            <div className="item">
              <div className="title-container">
                <span className="titleProjectTwo">
                  BOUCHERON : Apporter un meilleur service aux clients dans le
                  monde entier{" "}
                </span>
              </div>
            </div>
          </BackColumn>
        </Link>{" "}
      </ImgColumn>

      <ImgColumn className="link " style={{ right: "0" }}>
        {" "}
        <Link to="/projets-groupe-oyez/bmw">
          <BackColumn className="image" imgUrl={bmww}>
            <div className="item">
              <div className="title-container">
                <span className="titleProjectTwo">
                  BMW : Immerger le client dans l’univers de marque
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
