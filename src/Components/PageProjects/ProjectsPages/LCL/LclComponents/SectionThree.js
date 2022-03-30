import React from "react";
import styled from "styled-components";

import {
  Column,
  Container,
  MiniParagraph,
  MiniTitle,
  Row,
  SubTitle,
} from "../../ProjectsStyle";
const MiniParag = styled(MiniParagraph)`
  margin-bottom: 0px;
  margin-top: 40px;
`;
const LclRow = styled(Row)`
  margin-bottom: 0px;
`;
const LclTitle = styled(SubTitle)`
  margin-bottom: 100px;
  margin-top: 100px;
`;

const SectionThree = () => {
  return (
    <Container>
      <LclTitle>
        <strong>Des tablettes pour engager et transformer</strong>
      </LclTitle>{" "}
      <LclRow>
        <Column>
          <MiniTitle>
            <strong>Articles</strong>
          </MiniTitle>
          <MiniParag>
            Une ligne éditoriale favorisant le rebond entre l’actualité du lieu
            et les offres LCL.
          </MiniParag>
        </Column>
        <Column>
          <MiniTitle>
            {" "}
            <strong>Vidéos</strong>
          </MiniTitle>
          <MiniParag>
            Des vidéos qui prolongent les articles pour expliciter les sujets
            bancaires.
          </MiniParag>
        </Column>
        <Column>
          <MiniTitle>
            {" "}
            <strong>Informations</strong>
          </MiniTitle>
          <MiniParag>
            Des informations et conseils pratiques toujours contextualisés.{" "}
          </MiniParag>
        </Column>
      </LclRow>
      <LclRow>
        <Column>
          <MiniTitle>
            <strong>Offres & services</strong>
          </MiniTitle>
          <MiniParag>
            Un accès simplifié aux offres et services bancaires LCL.
          </MiniParag>
        </Column>
        <Column>
          <MiniTitle>
            {" "}
            <strong>Prise de rendez-vous</strong>
          </MiniTitle>
          <MiniParag>
            Une incitation au contact (envoi d’articles par mail et prise de
            rendez-vous).
          </MiniParag>
        </Column>
        <Column>
          <MiniTitle></MiniTitle>
          <MiniParag></MiniParag>
        </Column>
      </LclRow>
    </Container>
  );
};

export default SectionThree;
