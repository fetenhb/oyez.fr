import React from "react";
import { Header, P } from "../../ProjectsStyle";

const BoucheronHeader = () => {
  return (
    <div>
      <Header style={{ height: "613.7px" }} bgc="rgba(0, 0, 0, 0.3)">
        {" "}
        <div style={{ padding: "250px 0" }} className="container">
          <h1>BOUCHERON</h1>
          <P theme="#FCD680">
            <strong>Catalogue digital</strong>
          </P>
        </div>
      </Header>
    </div>
  );
};

export default BoucheronHeader;
