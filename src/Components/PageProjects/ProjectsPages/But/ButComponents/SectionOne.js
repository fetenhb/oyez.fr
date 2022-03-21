import React from "react";
import { MiniParagraph, MiniTitle, Paragraph } from "../../ProjectsStyle";

const SectionOne = () => {
  return (
    <div style={{ width: "870px", margin: "0 auto" }}>
      <Paragraph style={{ marginTop: "100px", marginBottom: "50px" }}>
        Un dispositif digital avec un double objectif d’extension de gamme
        digitalisé en magasin et de transformation du parcours et de
        l’expérience client.
      </Paragraph>

      <MiniTitle>
        <strong>Des enjeux commerciaux et stratégiques</strong>
      </MiniTitle>
      <MiniParagraph>
        Dans le cadre de la transformation de la marque et en particulier de
        l’offre décoration et mobilier, l’enseigne BUT a choisi de s’implanter
        dans les cœurs de villes. Ce faisant, l’enseigne devait réduire sa
        surface d’exposition et notamment celle consacrée à l’électro-ménager.
        Les bornes tactiles ont donc permis de continuer à présenter en magasin
        l’ensemble de la gamme “brun” et “blanc” tout en réduisant
        considérablement la quantité de produits exposés.
      </MiniParagraph>
      <MiniTitle>
        <strong>
          “Un parcours client devant s’achever assis dans le produit”
        </strong>
      </MiniTitle>
      <MiniParagraph>
        Les tablettes ont été pensées pour permettre au client une découverte
        augmentée des produits exposés accompagnée par le vendeur. En mobilité
        totale il devient possible de se déplacer parmi les produits exposés
        tout en vérifiant la disponibilité, les délais de livraison, les
        couleurs ou matières disponibles, et pourquoi pas s’asseoir pour essayer
        un canapé ou un fauteuil tout en finalisant la commande.
      </MiniParagraph>

      <MiniTitle>
        {" "}
        <strong>
          Des fonctions utiles pour les vendeurs, simples pour les clients
        </strong>{" "}
      </MiniTitle>

      <MiniParagraph>
        Une UI simple et très visuelle, une UX intuitive et pensée pour une
        utilisation vendeur, un moteur de recherche puissant facilitant l’accès
        a l’ensemble des gammes et une aide aux choix inspirante.
      </MiniParagraph>
    </div>
  );
};

export default SectionOne;
