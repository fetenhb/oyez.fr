import React from "react";
import { Header, P } from "../../ProjectsStyle";

const MoetHeader = () => {
  return (
    <div>
      {" "}
      <Header bgc="rgba(0, 0, 0, 0.6)">
        {" "}
        <div style={{ padding: "130px 0" }} className="container">
          <h1>MOËT HENNESSY</h1>
          <P theme="#2E99B0">
            <strong>Application Business</strong>
          </P>
        </div>
      </Header>
    </div>
  );
};

export default MoetHeader;
