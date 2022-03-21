import React from "react";
import {
  ButtonContact,
  Intro,
  Span,
} from "../../PageExpertises/ExpertisesComponents/CommerceUnifie";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.div`
  margin-top: 40px;
  width: 49%;
  display: inline-flex;
  div {
    display: block;
  }
  strong {
    font-size: 22px;
    font-family: Manrope;
  }
  ul {
    padding-inline-start: 30px;
  }
  li {
    font-size: 18px;
    font-family: "Montserrat light";
    margin-bottom: 10px;
  }
`;

const Engineering = () => {
  return (
    <div className="container">
      <Intro>
        <h1 style={{ fontFamily: "Manrope" }}>Engineering</h1>
        <p style={{ marginBottom: "20px" }}>
          En nous appuyant sur les méthodes et technologies portées par les
          GAFAM, nous développons les applications et plateformes capables
          d’accompagner l’accélération des cycles de transformation digitale.
        </p>
        <Span>
          Dans un environnement où la transformation des modèles de distribution
          est devenue un sujet stratégique pour les directions digitales, nous
          développons les outils et intégrons les technologies de rupture leur
          permettant de retrouver la <strong>souplesse</strong> et la{" "}
          <strong>scalabilité</strong> dont les projets{" "}
          <strong>omnicanaux</strong> ont besoin pour devenir de véritables
          vecteurs de développement du business.
          <br /> <br />
          Nous mettons à disposition des DSI et des directions digitales des
          solutions très opérationnelles pour répondre beaucoup plus
          efficacement aux besoins métiers.
          <br /> <br />À toutes les étapes-clés, nous ré-associons étroitement
          toutes les équipes impliquées dans la réussite d’un projet : ceux qui
          développent et ceux qui exploitent.
        </Span>
      </Intro>
      <List>
        <ul>
          <li>API</li>
          <li>GraphQL & ReactJS</li>
          <li>Microservices</li>
          <li>Dockerisation</li>
        </ul>
      </List>{" "}
      <List>
        <ul>
          <li>Tests automatisés</li>
          <li>Intégration et déploiement continus</li>
          <li>Pilotage projet DevOps</li>
          <li>Mise en œuvre d’usines de code</li>
        </ul>
      </List>
      <Link to="/contact">
        <ButtonContact
          theme={{ wh: "white", bl: "black" }}
          style={{ marginBottom: "40px", marginTop: "40px" }}
        >
          CONTACTEZ-NOUS
        </ButtonContact>
      </Link>
    </div>
  );
};

export default Engineering;
