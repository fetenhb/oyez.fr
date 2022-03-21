import React from "react";
import {
  Container,
  MiniParagraph,
  Row,
  SubTitle,
  TwoColumn,
} from "../../ProjectsStyle";

const SectionThree = () => {
  return (
    <Container>
      <Row>
        <TwoColumn>
          <SubTitle style={{ marginTop: "20px" }}>
            <strong>Le dispositif événementiel</strong>
          </SubTitle>
        </TwoColumn>
        <TwoColumn>
          <MiniParagraph>
            Avec plusieurs dizaines d’événements organisés depuis son ouverture,
            le Brand-Store BMW permet aux clients de la marque de vivre de
            nouvelles expériences et de découvrir différemment son ADN dans un
            cadre exceptionnel. Les dispositifs digitaux permettent aux équipes
            du Brand-Store de gérer la mise à jour des contenus rapidement et de
            façon totalement autonome.
          </MiniParagraph>
        </TwoColumn>
      </Row>
    </Container>
  );
};

export default SectionThree;
