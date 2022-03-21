import React from "react";
import { Link } from "react-router-dom";
import {
  Intro,
  Span,
  ButtonContact,
} from "../../PageExpertises/ExpertisesComponents/CommerceUnifie";
import { List } from "./Engineering";

const Consulting = () => {
  return (
    <div className="container">
      <Intro>
        <h1 style={{ fontFamily: "manrope" }}>Consulting</h1>
        <p style={{ marginBottom: "20px" }}>
          Nous mettons au service de votre stratégie nos 8 années d’expérience
          auprès des marques et distributeurs dans le domaine du phygital et du
          commerce unifié pour faire de vos projets digitaux des succès.
        </p>
        <Span>
          Qu’il s’agisse de stratégie, de méthodologie, d’architecture ou de
          technologies de rupture, nous vous accompagnons durant toutes les
          phases du projet avec les bons experts.
        </Span>
      </Intro>
      <div>
        <List>
          <div>
            <strong>Phygital</strong>
            <ul>
              <li>Analyse des parcours clients</li>
              <li>Audit des équipes de vente</li>
              <li>Stratégie d’unification des parcours…</li>
            </ul>
          </div>
        </List>{" "}
        <List>
          <div>
            <strong>Coaching</strong>
            <ul>
              <li>Coaching marketing</li>
              <li>Coaching métier</li>
              <li>Coaching DSI</li>
            </ul>
          </div>
        </List>
        <List>
          <div>
            <strong>Diagnostic digital</strong>
            <ul>
              <li>Deep-dive concurrentiel</li>
              <li>Analyse des canaux digitaux existants</li>
              <li>Définitions des objectifs business…</li>
            </ul>
          </div>
        </List>
        <List>
          <div>
            <strong>Management de l’innovation</strong>
            <ul>
              <li>Analyse et diagnostic des process</li>{" "}
              <li>Évangélisation de la gouvernance</li>
              <li>Accompagnement IT</li>
            </ul>
          </div>
        </List>
        <List>
          <div>
            <strong>Accompagnement IT</strong>
            <ul>
              <li>Diagnostic du legacy</li>
              <li>Accompagnement vers le DevOps</li>
              <li>Accompagnement sur le cloud</li>
              <li>Évaluation d’équipe…</li>
            </ul>
          </div>
        </List>
      </div>
      <Link to="/contact">
        <ButtonContact
          theme={{ wh: "white", bl: "black" }}
          style={{ marginBottom: "120px", marginTop: "70px" }}
        >
          CONTACTEZ-NOUS
        </ButtonContact>
      </Link>
    </div>
  );
};

export default Consulting;
