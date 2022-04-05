import React from "react";

import {
  ButtonContact,
  Intro,
  Span,
} from "../../PageExpertises/ExpertisesComponents/CommerceUnifie";
import { Link } from "react-router-dom";
import { Separation } from "../../HomePage/Separation/Separation";

const Cloud = () => {
  return (
    <div className="container">
      <Intro>
        <h1 style={{ fontFamily: "Manrope" }}>Cloud</h1>
        <p style={{ marginBottom: "20px" }}>
          Les nouveaux services cloud permettent désormais aux IT d’externaliser
          une grande partie des difficultés inhérentes à une stratégie de
          commerce unifié : optimisation des coûts de création et d’exploitation
          des services digitaux (e-commerce, apps,…), accessibilité de la DATA,
          scalabilité sur l’ensemble des canaux, sécurité, IA,…
        </p>
        <Span>
          Le Cloud Computing évolue en proposant des outils hardware et
          logiciels en tant que services (PaaS) permettant le développement
          d’applications sur l’ensemble des canaux. Ces plateformes offrent une
          grande variété de fonctionnalités : système d’exploitation,
          environnement de programmation, système de gestion de base de données,
          logiciel serveur, support, stockage, accès réseau, outils de design et
          de développement, hébergement,… En se libérant de ces différents
          sujets, l’IT peut se concentrer sur l’innovation et la création de
          valeur.
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

export default Cloud;
