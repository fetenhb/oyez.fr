import React from "react";
import lcl01 from "../../../../../Images/lcl-01.jpg";
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
      <SubTitle style={{ marginTop: "20px" }}>
        <strong>Des écrans pour informer et guider</strong>
      </SubTitle>
      <Row>
        <TwoColumn style={{ paddingLeft: "0" }}>
          <img src={lcl01} style={{ height: "auto", width: "100%" }} />
        </TwoColumn>
        <TwoColumn>
          <MiniParagraph>
            Une programmation contextualisée selon l’espace et l’actualité de
            l’agence, associant brand content, marketing opérationnel et social
            content.
            <br />
            <br />
            Un rebond systématique des contenus diffusés vers la tablette en
            libre-service. Une gestion simple et autonome par la banque de la
            programmation et de la mise à jour des contenus.
          </MiniParagraph>
        </TwoColumn>
      </Row>
    </Container>
  );
};

export default SectionTwo;
