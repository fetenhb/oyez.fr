import React from "react";
import {
  Column,
  Container,
  MiniParagraph,
  MiniTitle,
  Row,
} from "../../ProjectsStyle";

const SectionTwo = () => {
  return (
    <Container>
      <MiniTitle>
        <strong>Des tablettes pour engager et transformer</strong>
      </MiniTitle>{" "}
      <Row>
        <Column>
          <MiniTitle>
            <strong>Articles</strong>
          </MiniTitle>
          <MiniParagraph>
            Une ligne éditoriale favorisant le rebond entre l’actualité du lieu
            et les offres LCL.
          </MiniParagraph>
        </Column>
        <Column>
          <MiniTitle>
            {" "}
            <strong>Vidéos</strong>
          </MiniTitle>
          <MiniParagraph>
            Des vidéos qui prolongent les articles pour expliciter les sujets
            bancaires.
          </MiniParagraph>
        </Column>
        <Column>
          <MiniTitle>
            {" "}
            <strong>Informations</strong>
          </MiniTitle>
          <MiniParagraph>
            Des informations et conseils pratiques toujours contextualisés.{" "}
          </MiniParagraph>
        </Column>
      </Row>
      <Row>
        <Column>
          <MiniTitle>
            <strong>Offres & services</strong>
          </MiniTitle>
          <MiniParagraph>
            Un accès simplifié aux offres et services bancaires LCL.
          </MiniParagraph>
        </Column>
        <Column>
          <MiniTitle>
            {" "}
            <strong>Prise de rendez-vous</strong>
          </MiniTitle>
          <MiniParagraph>
            Une incitation au contact (envoi d’articles par mail et prise de
            rendez-vous).
          </MiniParagraph>
        </Column>
      </Row>
    </Container>
  );
};

export default SectionTwo;
