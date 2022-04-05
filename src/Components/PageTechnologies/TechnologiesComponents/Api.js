import React from "react";
import {
  ButtonContact,
  Intro,
  Span,
} from "../../PageExpertises/ExpertisesComponents/CommerceUnifie";
import { Link } from "react-router-dom";

const Api = () => {
  return (
    <div className="container">
      <Intro>
        <h1 style={{ fontFamily: "Manrope" }}>API</h1>
        <p style={{ marginBottom: "20px" }}>
          De la même manière qu’elles accompagnent des applications
          traditionnelles, pour leur permettre d’échanger des informations avec
          d’autres systèmes, les API (application programming interface, ou
          interface de programmation applicative) sont au cœur des microservices
          et des plateformes cloud. Elles assurent l’intégration du SI dans
          l’environnement digital global : GAFAM, start-up, prestataire de
          services, IoT,…
        </p>
        <Span>
          les API sont de véritables accélérateurs d’innovation. Avec des API,
          un SI peut facilement intégrer de nouvelles solutions à forte valeur
          ajoutée : IA, modules de paiement, solution de gestion de la
          livraison, assistants vocaux,… Mais il peut également proposer au
          marché un accès à certains de ses propres services. Un exemple : Un
          réseau de magasins physiques peut être « APIsé » pour permettre à des
          société tierces d’intégrer les services d’un retailer dans une
          application mobile (l’enseigne Walgreens s’est particulièrement
          illustrée dans ce domaine aux U.S). Les API permettent à la DATA de
          circuler beaucoup plus librement, ouvrant ainsi la voie à de nouveaux
          services à forte valeur ajoutée.
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
    </div>
  );
};

export default Api;
