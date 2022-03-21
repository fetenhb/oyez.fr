import React from "react";
import { Column, MiniParagraph, MiniTitle, Row } from "../../ProjectsStyle";

const SectionTwo = () => {
  return (
    <Row className="container">
      <Column>
        <MiniTitle>
          {" "}
          <strong> Production de contenus optimisée</strong>
        </MiniTitle>

        <MiniParagraph>
          Templates d’animation HTML5 et vidéos créés pour la marque lui
          permettent de renouveler les boucles de contenus de ses points de
          vente, au rythme de son actualité commerciale.{" "}
        </MiniParagraph>
      </Column>
      <Column>
        <MiniTitle>
          {" "}
          <strong>Gestion simplifiée de l’affichage dynamique</strong>
        </MiniTitle>
        <MiniParagraph>
          La solution proposée facilite une programmation différenciée pour
          chaque écran (vitrine, intérieur,…) et simplifie la mise à jour des
          animations (templates HTML5).
        </MiniParagraph>
      </Column>
      <Column>
        <MiniTitle>
          {" "}
          <strong>R.O.I</strong>
        </MiniTitle>
        <MiniParagraph>
          L’enseigne est entièrement autonome dans la gestion et l’actualisation
          de sa communication en point de vente.
        </MiniParagraph>
      </Column>
    </Row>
  );
};

export default SectionTwo;
