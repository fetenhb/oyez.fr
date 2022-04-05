import React from "react";
import { Separation } from "../../HomePage/Separation/Separation";
import {
  Intro,
  Span,
} from "../../PageExpertises/ExpertisesComponents/CommerceUnifie";

const SectionOne = () => {
  return (
    <div className="container">
      <Intro style={{ marginTop: "50px" }}>
        <h1 style={{ fontFamily: "Manrope" }}>
          Un centre de services et de formation
        </h1>
        <p style={{ marginBottom: "50px" }}>
          OYEZ Tunis est à la fois un pôle de développement d’excellence, un
          centre de services et de formation. En fonction des problématiques et
          des besoins clients, nous offrons différents modes d’organisation :
          équipe dédiée, prestation on-demand, régie intégrée à vos équipes,…
          avec une grande flexibilité.
        </p>
        <Span>
          Cette diversité permet de co-construire le mode de fonctionnement
          optimal avec le client. En fonctionnant main dans la main avec les
          équipes parisiennes et en nous concentrant sur les technologies de
          rupture et le traitement de la donnée, nous proposons une alternative
          à forte valeur ajoutée aux modèles classiques de nearshoring. Avec des
          compétences dans l’ensemble des domaines critiques de projets digitaux
          orientés commerce : DevOps, microservices, GraphQL, ReactJS,
          Dockerisation, Développement IoT, BackEnd (OMS, DAM, PIM,…) FrontEnd
          (site e-commerce, application m-commerce, application in-store,…)
        </Span>
      </Intro>
      <Separation theme="#d43a75" />{" "}
    </div>
  );
};

export default SectionOne;
