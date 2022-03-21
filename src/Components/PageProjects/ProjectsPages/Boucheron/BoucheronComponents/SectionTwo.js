import React from "react";
import {
  Container,
  MiniParagraph,
  Row,
  SubTitle,
  TwoColumn,
} from "../../ProjectsStyle";

const SectionTwo = () => {
  return (
    <Container>
      <Row>
        <TwoColumn>
          <SubTitle style={{ marginTop: "20px" }}>
            <strong>Le dispositif</strong>
          </SubTitle>
        </TwoColumn>
        <TwoColumn>
          <MiniParagraph>
            L’application développée pour web et iPad offre un accès instantané
            à l’ensemble du catalogue dans le monde entier. Il permet également
            de créer des sélections pour préparer la vente ou de mémoriser les
            favoris des clients.
          </MiniParagraph>
        </TwoColumn>
      </Row>
    </Container>
  );
};

export default SectionTwo;
