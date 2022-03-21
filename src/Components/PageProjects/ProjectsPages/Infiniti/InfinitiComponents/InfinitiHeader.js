import React from "react";
import { Header, P } from "../../ProjectsStyle";

const InfinitiHeader = () => {
  return (
    <div>
      <Header bgc="rgba(0, 0, 0, 0.6)">
        {" "}
        <div style={{ padding: "130px 0" }} className="container">
          <h1>INFINITI</h1>
          <P theme="#FCD680">
            <strong>Concession digitale</strong>
          </P>
        </div>
      </Header>
    </div>
  );
};

export default InfinitiHeader;
