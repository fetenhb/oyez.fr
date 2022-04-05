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
              Grand prix de l’innovation digitale{" "}
              <a href="http://sinenomine.fr/oyez-remporte-lor-aux-popai-awards-2014/">
                {" "}
                “ID 2014” catégorie “Vie Connectée”.
              </a>{" "}
            </Paragraph>
          </li>
          <li style={{ color: "#333" }}>
            <Paragraph>
              POPAI d’Or 2014 catégorie{" "}
              <a href="https://www.silicon-valley.fr/blog/2014/07/03/les-resultats-du-grand-prix-linnovation-digitale-2014/">
                {" "}
                “Digital Media”
              </a>
            </Paragraph>
          </li>
        </ul>
      </div>
      <figure>
        {" "}
        <img
          src={prixDarty}
          style={{ maxWidth: "105%", marginLeft: "-50px" }}
        />
      </figure>
      <EspaceVide />
      <EspaceVide />
    </Container>
  );
};

export default SectionThree;
