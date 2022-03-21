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
            <strong>Le dispositif expérientiel “Vortex”</strong>
          </SubTitle>
        </TwoColumn>
        <TwoColumn>
          <MiniParagraph>
            Des écrans circulaires de 5m de diamètre surplombent les véhicules
            exposés. Lasers, plafond écran et détecteurs de mouvements
            permettent de mixer à l’infini jeux de lumières et vidéos pour
            recréer une impression de vitesse autour des modèles exposés et
            personnaliser chaque événement.
          </MiniParagraph>
        </TwoColumn>
      </Row>
    </Container>
  );
};

export default SectionTwo;
