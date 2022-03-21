import React from "react";
import { Link } from "react-router-dom";
import {
  ButtonContact,
  Intro,
  Questions,
  Section,
  Span,
} from "./CommerceUnifie";

const DataCreativite = () => {
  return (
    <div className="container" style={{ marginBottom: "50px" }}>
      <Intro>
        <h1 style={{ fontFamily: "Montserrat" }}>Data Créativité</h1>
        <p>
          Nous bâtissons des stratégies data tournées vers la transformation de
          l’expérience client.
        </p>
        <Span>
          Nous vivons à une époque où, même si Amazon a renforcé la nécessité
          pour les enseignes de proposer des produits accessibles à des tarifs
          très compétitifs, cela ne suffit plus. Fournir un produit, au meilleur
          prix et doté des meilleures caractéristiques, n’est plus du tout
          considéré comme le Saint Graal. De l’intelligence artificielle au
          machine learning, en passant par le social media listening, la data
          bouscule le commerce et le marketing chaque jour. Dans un contexte où
          les technologies se complexifient et les réglementations se renforcent
          pour protéger un consommateur toujours plus exigeant, nous
          accompagnons nos clients dans la définition de stratégies data
          innovantes et pragmatiques centrées sur l’experience utilisateur.
        </Span>
      </Intro>
      <Section>
        <h3>Data UX</h3>
        <Span>
          L’une des forces des pure-players du retail est la connaissance
          granulaire du client parce que l’expérience se déroule principalement
          en ligne. Pour les acteurs traditionnels, la variété des points de
          collecte (site web, mobile, en rayon, sur les réseaux sociaux, aux
          alentours du commerce, en caisse,…) rend cette connaissance beaucoup
          plus compliquée. Or, la clé d’une expérience client sans couture est
          le croisement des différentes données disponibles.
          <br />
          <br />
          Nous aidons donc nos clients à libérer leurs données, à réconcilier la
          multitude d’informations générées par chaque client, pour pouvoir
          s’adapter aux enjeux actuels et futurs du commerce. Selon nous, et
          plus que jamais, le succès d’un service, d’une application ou d’un
          parcours shopper est étroitement lié à la data.
        </Span>
      </Section>{" "}
      <Section>
        <h3>Chaque question a une réponse</h3>
        <Questions>
          <p>
            Comment rendre accessibles ses données tout en gardant le contrôle ?
          </p>
          <p>
            Comment identifier des sources de data extérieures qui pourraient
            accélérer le business ?
          </p>
          <p>
            Comment décloisonner la donnée en interne et créer des services
            digitaux data-driven ?
          </p>
          <p>
            Comment intégrer la data à un parcours client personnalisé et
            améliorer l’expérience du client ?
          </p>
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

export default DataCreativite;
