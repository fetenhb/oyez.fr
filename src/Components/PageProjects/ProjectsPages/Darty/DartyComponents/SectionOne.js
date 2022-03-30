import React from "react";
import { Container, Paragraph, SectionTitle } from "../../ProjectsStyle";
import Counter from "./Counter";

const SectionOne = () => {
  return (
    <Container>
      <Paragraph>
        <strong>
          Premier déploiement en France de tablettes vendeurs augmentés dans le
          retail spécialisé en 2014.{" "}
        </strong>
      </Paragraph>
      <Paragraph>
        Un dispositif qui reconnecte les vendeurs aux attentes des clients
        omnicanaux avec un parcours sans couture et qui unifie magasins et site
        e-commerce en temps réel.
      </Paragraph>
      <Counter />
      <SectionTitle>
        <strong> Un parcours client unifié</strong>
      </SectionTitle>
      <Paragraph>
        Un parcours client totalement fluide jusqu’à l’encaissement. Une
        solution de paiement en mobilité développée sous Android et intégrée à
        la tablette vendeur. Reliée à un serveur monétique où les flux sont
        entièrement sécurisés, elle s’interconnecte avec un TPE (terminal point
        d’encaissement) sur lequel le client règle avec sa carte bancaire.
      </Paragraph>
    </Container>
  );
};

export default SectionOne;
