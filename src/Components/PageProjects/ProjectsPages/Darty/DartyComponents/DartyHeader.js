import React from "react";
import { Header, P } from "../../ProjectsStyle";

const DartyHeader = () => {
  return (
    <div>
      {" "}
      <Header bgc="rgba(10, 10, 10, 0.5)">
        {" "}
        <div style={{ padding: "130px 0" }} className="container">
          <h1>DARTY : Catalogue augmenté et paiement mobile en magasin</h1>
          <P theme="#FF2E4D">
            <strong>
              #COMMERCEUNIFIÉ #MOBILITÉ #VENDEURSAUGMENTÉS #MAGASINSCONNECTÉS
            </strong>
          </P>
        </div>
      </Header>
    </div>
  );
};

export default DartyHeader;
