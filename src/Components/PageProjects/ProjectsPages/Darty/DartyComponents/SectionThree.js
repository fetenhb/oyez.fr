import React from "react";
import {
  Container,
  EspaceVide,
  Paragraph,
  SectionTitle,
} from "../../ProjectsStyle";
import prixDarty from "../../../../../Images/prix-darty.jpg";
const SectionThree = () => {
  return (
    <Container>
      <SectionTitle>
        <strong> Récompenses</strong>
      </SectionTitle>
      <div>
        <ul style={{ paddingLeft: "16px" }}>
          <li style={{ color: "#333" }}>
            <Paragraph>
              Grand prix de l’innovation digitale “ID 2014” catégorie “Vie
              Connectée”.{" "}
            </Paragraph>
          </li>
          <li style={{ color: "#333" }}>
            <Paragraph>POPAI d’Or 2014 catégorie “Digital Media”</Paragraph>
          </li>
        </ul>
      </div>
      <figure>
        {" "}
        <img src={prixDarty} style={{ maxWidth: "100%" }} />
      </figure>
      <EspaceVide />
      <EspaceVide />
    </Container>
  );
};

export default SectionThree;
