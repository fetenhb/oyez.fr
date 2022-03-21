import React from "react";
import { Link } from "react-router-dom";
import {
  ButtonContact,
  Intro,
  Questions,
  Section,
  Span,
} from "./CommerceUnifie";

const Marketing = () => {
  return (
    <div className="container">
      <Intro>
        <h1 style={{ fontFamily: "Montserrat" }}>Marketing Technologique</h1>
        <p>
          Nous favorisons les interactions temps réel entre shoppers, offres,
          marques et enseignes.
        </p>
      </Intro>
      <Section>
        <h3>De la communication à l’app</h3>
        <Span>
          Les services digitaux (web, apps,…) se complexifient au fur et à
          mesure des avancées technologiques : temps réel, machine learning,
          bots, dataviz,… Ce passage est déjà perçu comme particulièrement
          difficile par de très nombreux CMO qui y voient une menace pour leurs
          métiers et leurs postes. Pourtant le potentiel marketing de ces
          mutations est considérable. Pour engager cette transformation de façon
          effective et pertinente le marketing doit désormais s’acculturer à la
          technologie de façon beaucoup plus poussée. Nous accompagnons nos
          clients dans cette transformation en concevant des services pilotables
          et tournés vers la satisfaction client{" "}
        </Span>
      </Section>{" "}
      <Section>
        <h3>Marketing as a service</h3>
        <Span>
          Le temps du « On n’a qu’à faire évoluer notre site e-commerce tous les
          6 mois et ça ira bien » est bel et bien révolu. Dans cet environnement
          où la place des services digitaux devient primordiale, avoir le bon
          discours, la bonne image, les bons produits, le bon réseau, les bons
          points de vente ne suffisent plus. Nous aidons les fonctions marketing
          à proposer les services digitaux qui composeront une véritable
          expérience consommateur.{" "}
        </Span>
      </Section>
      <Section>
        <h3>Chaque question a une réponse</h3>
        <Questions>
          <p>Comment concevoir un service marketing temps réel ?</p>
          <p>Comment piloter une opération sur l’ensemble des canaux ?</p>
          <p>Comment intégrer les technologies de start-up ?</p>
        </Questions>
      </Section>
      <Link to="/contact">
        <ButtonContact theme={{ wh: "white", bl: "black" }}>
          CONTACTEZ-NOUS
        </ButtonContact>
      </Link>
    </div>
  );
};

export default Marketing;
