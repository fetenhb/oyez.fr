import React from "react";
import { Header, P } from "../../ProjectsStyle";

const BnpHeader = () => {
  return (
    <div>
      {" "}
      <Header bgc="rgba(0, 0, 0, 0.7)">
        {" "}
        <div style={{ padding: "130px 0" }} className="container">
          <h1>BNP Paribas</h1>
          <P theme="#FCD680">
            <strong>
              Solution digitale mobile pour les conseillers bancaires
            </strong>
          </P>
        </div>
      </Header>
    </div>
  );
};

export default BnpHeader;
