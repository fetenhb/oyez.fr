import React from "react";
import { Header, P } from "../../ProjectsStyle";
import { HeaderWithImg } from "../../SaintLaurent/SaintLaurentComponents/SaintLaurentHeader";
import carrefour from "../../../../../Images/carrefour-hero.jpg";

const CarrefourHeader = () => {
  return (
    <div>
      {" "}
      <HeaderWithImg bgImage={carrefour}>
        <Header style={{ height: "613.7px" }} bgc="rgba(0, 0, 0, 0.5)">
          {" "}
          <div style={{ padding: "200px 0" }} className="container">
            <h1>
              CARREFOUR : Des vendeurs augmentés pour transformer le parcours
              client
            </h1>
            <P theme="#2E99B0">
              <strong>Application vendeur</strong>
            </P>
          </div>
        </Header>
      </HeaderWithImg>
    </div>
  );
};

export default CarrefourHeader;
