import React from "react";
import { Header, P } from "../../ProjectsStyle";
import { HeaderWithImg } from "../../SaintLaurent/SaintLaurentComponents/SaintLaurentHeader";
import Darty from "../../../../../Images/darty-cuisine.jpg";

const DartyCuisineHeader = () => {
  return (
    <div>
      {" "}
      <HeaderWithImg bgImage={Darty}>
        <Header bgc="rgba(0, 0, 0, 0.7)">
          {" "}
          <div style={{ padding: "130px 0" }} className="container">
            <h1>MURALE DARTY CUISINE</h1>
            <P theme="#FCD680">
              <strong>Retail-design pour l'enseigne Darty, Paris Wagram</strong>
            </P>
          </div>
        </Header>
      </HeaderWithImg>
    </div>
  );
};

export default DartyCuisineHeader;
