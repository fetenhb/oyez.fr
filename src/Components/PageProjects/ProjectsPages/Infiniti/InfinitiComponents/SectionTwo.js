import React from "react";
import { MiniParagraph, MiniTitle, Row, TwoColumn } from "../../ProjectsStyle";

const SectionTwo = () => {
  return (
    <Row className="container">
      <TwoColumn>
        <MiniTitle>
          <strong>Screen mirroring</strong>
        </MiniTitle>
        <MiniParagraph>
          Le client peut consulter l’ensemble des contenus de la marque sur sa
          page Youtube et projeter les contenus directement sur le grand écran.
        </MiniParagraph>
      </TwoColumn>
      <TwoColumn>
        <MiniTitle>
          {" "}
          <strong>Configurateur en ligne</strong>
        </MiniTitle>
        <MiniParagraph>
          La tablette permet également d’ouvrir le configurateur en ligne et de
          le connecter à l’écran 50 pouces. Ainsi, le client peut personnaliser
          en temps réel son véhicule (extérieur et intérieur) et voir le
          résultat en grand format.
        </MiniParagraph>
      </TwoColumn>
    </Row>
  );
};

export default SectionTwo;
