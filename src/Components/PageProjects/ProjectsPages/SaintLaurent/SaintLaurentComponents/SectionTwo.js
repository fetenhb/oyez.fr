import React from "react";
import { Column, MiniParagraph, MiniTitle, Row } from "../../ProjectsStyle";

const SectionTwo = () => {
  return (
    <Row className="container">
      <Column>
        <MiniTitle>
          <strong>Une application vendeurs internationale</strong>
        </MiniTitle>
        <MiniParagraph>
          L’application à destination des vendeurs assure la remontée des
          lookbooks et des images de défilés de la marque.
        </MiniParagraph>
      </Column>
      <Column>
        <MiniTitle>
          {" "}
          <strong>Un outil au service du rituel de vente</strong>
        </MiniTitle>
        <MiniParagraph>
          Le support disparaît derrière les contenus pour favoriser l’échange
          autour de l’univers de chaque collection.
        </MiniParagraph>
      </Column>
      <Column>
        <MiniTitle>
          {" "}
          <strong>Enrichissement du CRM</strong>
        </MiniTitle>
        <MiniParagraph>
          Les silhouettes et produits favoris des clients peuvent leur être
          envoyés par mail, qualifiant ainsi la base CRM.
        </MiniParagraph>
      </Column>
    </Row>
  );
};

export default SectionTwo;
