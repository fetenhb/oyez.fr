import React from "react";
import { Container, Lien, MiniParagraph, SubTitle } from "../../ProjectsStyle";

const SectionTwo = () => {
  return (
    <Container
      style={{ maxWidth: "870px", marginTop: "80px", marginBottom: "100px" }}
    >
      <SubTitle>
        <strong> Retail-design</strong>
      </SubTitle>
      <MiniParagraph>
        <strong>
          Première réalisation de retail-design de l’agence, résultat de la
          collaboration entre Oyez et{" "}
          <Lien href="http://charlesdedainville.fr/">
            Charles De Dainville Design{" "}
          </Lien>{" "}
          , ce mural spectaculaire met en avant la profondeur de gamme de
          l’offre cuisine sur mesure de l’enseigne DARTY.
        </strong>{" "}
      </MiniParagraph>
    </Container>
  );
};

export default SectionTwo;
