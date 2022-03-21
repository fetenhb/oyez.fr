import React from "react";
import { MiniParagraph, Paragraph, SectionTitle } from "../../ProjectsStyle";

const SectionOne = () => {
  return (
    <div className="container">
      <SectionTitle>
        <strong> Une app pour transformer les vendeurs en conseillers</strong>
      </SectionTitle>
      <Paragraph>
        Une app qui concrétise l’extension de gamme des produits
        non-alimentaires dans les hypermarchés Carrefour, en permettant un accès
        temps réel à tout l’assortiment produits pour permettre aux vendeurs de
        mieux s’adapter aux besoins de leurs clients.
      </Paragraph>
      <MiniParagraph>
        Grâce à l’app, le vendeur a accès en permanence à une offre
        complémentaire de celle présentée en rayons. Au-delà de la simple liste
        de produits, le vendeur a accès à l’ensemble des informations produits
        et fonctions à valeur ajoutée, notamment : prix, stocks, promotions,
        financement, délais de livraison, paiement,…
      </MiniParagraph>
    </div>
  );
};

export default SectionOne;
