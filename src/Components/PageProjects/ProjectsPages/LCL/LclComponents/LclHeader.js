import React from "react";
import { Header, P } from "../../ProjectsStyle";

const LclHeader = () => {
  return (
    <div>
      <Header style={{ height: "613.7px" }} bgc="rgba(0, 0, 0, 0.5)">
        {" "}
        <div style={{ padding: "250px 0" }} className="container">
          <h1>LCL</h1>
          <P theme="#2E99B0">
            <strong>Digitalisation des agences Cathédrale</strong>
          </P>
        </div>
      </Header>
    </div>
  );
};

export default LclHeader;
