import React from "react";
import { Container, MiniParagraph, SubTitle } from "../../ProjectsStyle";

const SectionThree = () => {
  return (
    <Container>
      <strong>
        {" "}
        <SubTitle>Un assistant pour personnaliser l’accueil</SubTitle>
      </strong>
      <MiniParagraph>
        Sur sa tablette, le conseiller à l’accueil identifie le client entrant,
        accède au motif de sa venue et peut, par exemple, prévenir la personne
        avec qui il a rendez-vous.
      </MiniParagraph>
      <MiniParagraph>
        La tablette donne accès à toutes les informations pertinentes du client
        pour mieux répondre à ses besoins et déclencher des opportunités
        commerciales.
      </MiniParagraph>
    </Container>
  );
};

export default SectionThree;
