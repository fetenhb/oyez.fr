import React from "react";
import { Header, P } from "../../ProjectsStyle";

const HeinekenHeader = () => {
  return (
    <div>
      {" "}
      <Header bgc="rgba(0, 0, 0, 0.7)">
        {" "}
        <div style={{ padding: "130px 0" }} className="container">
          <h1>HEINEKEN</h1>
          <P theme="#2E99B0">
            <strong>Solution digitale in-store 360°</strong>
          </P>
        </div>
      </Header>
    </div>
  );
};

export default HeinekenHeader;
