import React from "react";
import { Header, P } from "../../ProjectsStyle";

const BmwHeader = () => {
  return (
    <div>
      {" "}
      <Header bgc="rgba(0, 0, 0, 0.7)">
        {" "}
        <div style={{ padding: "130px 0" }} className="container">
          <h1>BMW</h1>
          <P theme="#FF2E4D">
            <strong>L’écrin digital et le media-wall</strong>
          </P>
        </div>
      </Header>
    </div>
  );
};

export default BmwHeader;
