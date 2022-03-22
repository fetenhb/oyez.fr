import React from "react";
import { Link } from "react-router-dom";
import but from "../../../../../Images/butt.gif";
import carrefour from "../../../../../Images/carrefour-hero.jpg";
import { BackColumn, ImgColumn } from "../../ProjectsStyle";
const Projets = () => {
  return (
    <div style={{ display: "flex", height: "500px" }}>
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

      <ImgColumn className="link " style={{ right: "0" }}>
        {" "}
        <Link to="/projets-groupe-oyez/carrefour">
          <BackColumn className="image" imgUrl={carrefour}>
            <div className="item">
              <div className="title-container">
                <span className="titleProjectTwo">
                  CARREFOUR : Des vendeurs augmentés pour transformer le
                  parcours client
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
