import React from "react";
import styled from "styled-components";
import { Button } from "../../HomePage/Button/ButtonPlus";
export const Commerce = styled.div`
  margin-top: 120px;
  h1 {
    font-family: "Montserrat" !important;
  }
  p {
    color: #010101;
    font-size: 24px;
    @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;700;800&display=swap");
    font-family: "Montserrat light";

    line-height: 30pt;
  }
`;
export const Span = styled.span`
  color: #000000;
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;700;800&family=Montserrat:wght@200&display=swap");
  font-family: "Montserrat light";
  padding-bottom: 20px;
  font-size: 18px;
`;

export const Section = styled.div`
  h3 {
    font-size: 28px;
    line-height: 28px;
    font-family: Montserrat;
    margin-bottom: 10px;
    padding-top: 20px;
  }
`;

export const Questions = styled.div`
  border-left: 2px #ddd solid;
  padding: 20px 20px 20px 40px;
  line-height: 30px;
  letter-spacing: 0.01em;
  margin-bottom: 24px;
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;700;800&display=swap");
  p {
    color: #000000;
    font-size: 20px;
    font-family: "Montserrat light";
    margin-top: 20px;
  }
`;
export const ButtonContact = styled(Button)`
  &:hover {
    background: #333;
    color: #fff;
  }
  font-weight: 600;
`;
const CommerceUnifie = (theme) => {
  return (
    <div className="container">
      <Commerce>
        <h1>Commerce Unifié</h1>
        <p>
          Nous concevons, développons et déployons des parcours clients sur
          l’ensemble des canaux physiques et digitaux.
        </p>
        <Span>
          Avec le développement important des technologies du retail
          (RetailTech) et l’unification des canaux, le commerce connait une
          révolution permanente. Pas un mois sans qu’une GAFAM, une étude ou une
          start-up ne vienne changer la donne (voire la bouleverser). S’adapter
          aux nouveaux modes de consommation et repenser la place de la
          technologie dans les parcours clients est désormais vital.
        </Span>
      </Commerce>
      <Section>
        <h3>Unifier les technologies pour unifier le commerce</h3>
        <Span>
          Si depuis plusieurs années, de nombreux retailers ont choisi de
          renforcer leur « digitale », toutes les entreprises n’ont pas le même
          niveau de maturité. Les réseaux de vente physique et e-commerce sont
          encore trop souvent gérés de manière distincte, ce qui interrompt le
          parcours client et limite les possibilités de mutualisation des
          innovations entre les différents canaux. Nous accompagnons les marques
          et distributeurs dans la mise en place d’une stratégie{" "}
          <strong>unicanale </strong>
          intégrant nativement tous les points de contact avec les clients.
        </Span>
      </Section>{" "}
      <Section>
        <h3>
          Des technologies au service de l’expérience client personnalisée
        </h3>
        <Span>
          L’innovation est désormais au cœur de la performance des
          distributeurs. Ces nouvelles technologies arrivent progressivement
          dans les parcours clients et engendrent de nouvelles pratiques. Elles
          offrent la possibilité de chercher librement un produit à tout moment
          et n’importe où, d’<strong>interagir</strong> , de{" "}
          <strong>commenter</strong> , de{" "}
          <strong> diminuer les temps d’attente </strong>en caisse,… Nous aidons
          nos clients à combiner ces services pour concevoir des{" "}
          <strong>
            {" "}
            parcours shoppers performants en magasins comme sur l’ensemble des
            canaux.
          </strong>{" "}
        </Span>
      </Section>
      <Section>
        <h3>Chaque question a une réponse</h3>
        <Questions>
          <p>Comment accélérer la mise en œuvre d’un projet phygital ?</p>
          <p>Comment unifier mes parcours clients ?</p>
          <p>
            Comment s’assurer que les innovations dopent le chiffre d’affaires ?
          </p>
          <p>Comment équiper des vendeurs ?</p>
        </Questions>
      </Section>
      <ButtonContact theme={{ wh: "white", bl: "black" }}>
        CONTACTEZ-NOUS
      </ButtonContact>
    </div>
  );
};

export default CommerceUnifie;
