import React from "react";
import {
  Container,
  MiniParagraph,
  Row,
  SubTitle,
  TwoColumn,
} from "../../ProjectsStyle";
const SectionFour = () => {
  return (
    <Container>
      <Row>
        <TwoColumn>
          <SubTitle style={{ marginTop: "20px" }}>
            <strong>La vitrine digitale</strong>
          </SubTitle>
        </TwoColumn>
        <TwoColumn>
          <MiniParagraph>
            Un Media-Wall “3D” de 35m² diffuse des vidéos produites pour chaque
            actualité du lieu.
          </MiniParagraph>
        </TwoColumn>
      </Row>
    </Container>
  );
};

export default SectionFour;
