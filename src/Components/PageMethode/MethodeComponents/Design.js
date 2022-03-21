import React from "react";
import { Link } from "react-router-dom";
import {
  ButtonContact,
  Intro,
  Section,
  Span,
} from "../../PageExpertises/ExpertisesComponents/CommerceUnifie";

const Design = () => {
  return (
    <div className="container">
      <Intro>
        <h1 style={{ fontFamily: "manrope", marginBottom: "100px" }}>
          Le Design Thinking pour innover et le DevOps pour produire
        </h1>
      </Intro>
      <Section>
        <h3>Comprendre le DevOps</h3>
        <Span>
          Le DevOps est avant toute chose une mouvance culturelle, un mode de
          pensée. Cousin de l’Agile, le DevOps a pour objectif de rapprocher et
          de mieux faire travailler entre elles les équipes de développement et
          de production pour gagner en qualité sur les projets conçus et
          délivrés. L’objectif du DevOps est donc de casser le mur de
          l’incompréhension existant entre les équipes « dev » et « ops ». Ce
          résultat peut être obtenu d’abord par les relations humaines.
        </Span>
      </Section>{" "}
      <Section>
        <h3>Comprendre le Design Thinking</h3>
        <Span>
          La culture du Design Thinking est adoptée par les entreprises les plus
          innovantes au monde. Cette méthode de travail permet de résoudre une
          problématique d’innovation par une approche multidisciplinaire centrée
          sur l’humain. C’est une synthèse entre la pensée analytique et la
          pensée intuitive qui permet de coller au plus près de l’expérience
          recherchée par le client. De cette façon on augmente les chances de
          succès en minimisant les risques et les coûts grâce à l’identification
          en amont des erreurs anticipables.
        </Span>
      </Section>
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

export default Design;
