import React from "react";
import { Link } from "react-router-dom";
import {
  ButtonContact,
  Intro,
  Questions,
  Section,
  Span,
} from "../../PageExpertises/ExpertisesComponents/CommerceUnifie";

const SectionTwo = () => {
  return (
    <div className="container">
      <Intro>
        <h1 style={{ fontFamily: "Manrope" }}>
          Accélérez vos projets de recrutement en France
        </h1>
        <p style={{ marginBottom: "20px" }}>
          Oyez Tunis est également un centre de formation offrant une solution
          pour accélérer vos recrutements et la constitution de vos équipes en
          France. Notre offre régie intègre notamment la présélection des
          candidats et l’ensemble des démarches administratives et pratiques
          leur permettant de s’installer sur le territoire, pour vous permettre
          de rester concentrés sur vos enjeux business et projet.
        </p>
      </Intro>
      <Section>
        <h3>Chaque question a une réponse</h3>
        <Questions>
          <p>Vous cherchez à compléter vos équipes fullstack ?</p>
          <p>Vous êtes à la recherche d’intégrateurs ou d’experts GCP ?</p>
          <p>Vous avez un projet et souhaitez nous rencontrer ?</p>
        </Questions>
      </Section>
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

export default SectionTwo;
