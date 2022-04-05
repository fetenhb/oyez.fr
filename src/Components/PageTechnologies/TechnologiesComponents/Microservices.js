import React from "react";

import {
  ButtonContact,
  Intro,
  Span,
} from "../../PageExpertises/ExpertisesComponents/CommerceUnifie";
import { Link } from "react-router-dom";
import { Separation } from "../../HomePage/Separation/Separation";

const Microservices = () => {
  return (
    <div className="container">
      <Intro>
        <h1 style={{ fontFamily: "Manrope" }}>Microservices</h1>
        <p style={{ marginBottom: "20px" }}>
          Le principe des microservices est de découper une « application »
          (site e-commerce, app, OMS,…) en une série de fonctions indépendantes
          afin d’en faciliter la gestion et la disponibilité. Son principal
          avantage : si le métier réclame une évolution, seule la fonction
          concernée est mise à jour, et non l’intégralité de l’application.
        </p>
        <Span>
          Alors que les entreprises réclament des cycles de développement
          toujours plus rapides pour s’adapter aux besoins changeants de leurs
          clients, cette approche connaît de plus en plus d’adeptes. Les
          microservices permettent notamment d’industrialiser la création de
          services digitaux et surtout d’automatiser leur maintenance et leur
          évolution. Ils améliorent les performances globale des « front » (UX &
          UI) en permettant leur évolution continue. Ils assurent également une
          réelle mutualisation des développements effectués sur les différents
          canaux. Le marché des architectures microservices a connu une forte
          croissance ces 5 dernières années, notamment tirée par les GAFAM. Ce
          succès est la conséquence directe de leurs besoins d’une plus grande
          agilité.
        </Span>
      </Intro>
      <Link to="/contact">
        <ButtonContact
          theme={{ wh: "white", bl: "black" }}
          style={{ marginBottom: "40px", marginTop: "40px" }}
        >
          CONTACTEZ-NOUS
        </ButtonContact>
      </Link>
      <Separation theme="#d43a75" />{" "}
    </div>
  );
};

export default Microservices;
