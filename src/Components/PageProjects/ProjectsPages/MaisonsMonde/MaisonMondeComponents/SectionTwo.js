import React from "react";
import { Column, MiniParagraph, MiniTitle, Row } from "../../ProjectsStyle";

const SectionTwo = () => {
  return (
    <Row className="container">
      <Column>
        <MiniTitle>
          {" "}
          <strong>Catalogue</strong>
        </MiniTitle>

        <MiniParagraph>
          Accès instantané à l’intégralité de l’offre Maisons du Monde en
          mobilité.
        </MiniParagraph>
      </Column>
      <Column>
        <MiniTitle>
          {" "}
          <strong>Paniers multiples</strong>
        </MiniTitle>
        <MiniParagraph>
          Suivi de plusieurs paniers clients en simultané.
        </MiniParagraph>
      </Column>
      <Column>
        <MiniTitle>
          {" "}
          <strong>Stocks</strong>
        </MiniTitle>
        <MiniParagraph>
          Visualisation en temps réel des différents stocks de l’enseigne.
        </MiniParagraph>
      </Column>
    </Row>
  );
};

export default SectionTwo;
