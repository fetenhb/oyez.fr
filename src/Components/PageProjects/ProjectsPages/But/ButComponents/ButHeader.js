import React from "react";
import { Header, P } from "../../ProjectsStyle";

const ButHeader = () => {
  return (
    <div>
      {" "}
      <Header bgc="rgba(0, 0, 0, 0.6)">
        {" "}
        <div style={{ padding: "130px 0" }} className="container">
          <h1>BUT</h1>
          <P theme="#FFF">
            <strong>
              Digitaliser pour réduire les surfaces d'exposition en magasin
            </strong>
          </P>
        </div>
      </Header>
    </div>
  );
};

export default ButHeader;
