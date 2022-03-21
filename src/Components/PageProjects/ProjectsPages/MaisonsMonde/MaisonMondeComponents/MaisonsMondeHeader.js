import React from "react";
import { Header, P } from "../../ProjectsStyle";

const MaisonsMondeHeader = () => {
  return (
    <div>
      {" "}
      <Header bgc="rgba(0, 0, 0, 0.6)">
        {" "}
        <div style={{ padding: "130px 0" }} className="container">
          <h1>MAISONS DU MONDE</h1>
          <P theme="#FFF">
            <strong>Tablette vendeur</strong>
          </P>
        </div>
      </Header>
    </div>
  );
};

export default MaisonsMondeHeader;
