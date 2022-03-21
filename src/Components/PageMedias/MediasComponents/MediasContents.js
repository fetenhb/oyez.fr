import React from "react";
import styled from "styled-components";
import marketing from "../../../Images/marketing.jpg";
import bug from "../../../Images/bug.jpg";
import microservice from "../../../Images/microservice.jpg";
import Tribune from "../../../Images/Tribune.jpg";
import AdobeStock from "../../../Images/AdobeStock.jpeg";
import Trust from "../../../Images/Trust.jpg";
import PME from "../../../Images/PME.jpeg";
import BFM from "../../../Images/BFM.png";

import { Button } from "../../HomePage/Button/ButtonPlus";
import { Separation } from "../../HomePage/Separation/Separation";

const Section = styled.section`
  padding-left: 15px;
  padding-right: 15px;
  h1 {
    font-size: 48px;
    font-family: manrope;
    margin-top: 0;
  }

  h2 {
    font-size: 36px;
    font-family: manrope;
  }

  p {
    font-family: "Montserrat light";
    margin-top: 40px;
    margin-bottom: 40p;
    font-size: 18px;
  }
`;
const Image = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  height: 260px;
`;
const MediasContents = () => {
  return (
    <div className="container">
      <Section>
        <h1>AR marketing : une révolution à venir?</h1>
        <Image image={marketing} />
        <p>
          Il n’est plus nécessaire de présenter la réalité augmentée (AR). Déjà
          une réalité, la technologie est pourtant encore peu utilisée dans le
          marketing.
        </p>{" "}
        <a
          href="https://www.e-marketing.fr/Thematique/cross-canal-1094/Breves/-Tribune-Realite-augmentee-marketing-une-revolution-a-venir--337288.htm#Iizh3yfoHTMZvqEs.97"
          target="_blank"
        >
          <Button
            theme={{ wh: "black", bl: "#ffffff" }}
            style={{ border: "black 2px solid", padding: "18px 38px" }}
          >
            Lire la suite sur e-marketing.fr
          </Button>
        </a>
      </Section>
      <Separation theme="#0070c7" style={{ marginTop: "60px" }} />
      <Section>
        <h2>
          Apps, bug, infra, dev… : une problématique pour les marques et les
          distributeurs
        </h2>
        <Image image={bug} />
        <p>
          L’irruption, désormais généralisée dans notre quotidien, du mobile,
          des plateformes et autres assistants vocaux a forcément des
          conséquences sur la relation entre consommateurs et marques ou
          distributeurs.
        </p>{" "}
        <a
          href="https://www.e-marketing.fr/Thematique/retail-1095/Breves/Apps-bug-infra-dev-problematique-marques-distributeurs-329117.htm#ItPJizi87GyLfVcQ.97"
          target="_blank"
        >
          <Button
            theme={{ wh: "black", bl: "#ffffff" }}
            style={{ border: "black 2px solid", padding: "18px 38px" }}
          >
            Lire la suite sur e-marketing.fr
          </Button>
        </a>
        <Separation theme="#0070c7" style={{ marginTop: "60px" }} />
      </Section>

      <Section>
        <h2>
          Signe des temps, le site e-commerce de LVMH 24sevres s’appuie sur les
          micro services
        </h2>
        <Image image={microservice} />
        <p>
          Les nouvelles plateformes du e-commerce s’appuient sur les micro
          services, les containers et le Devops. Le géant du luxe LVMH exploite
          ces solutions pour son nouveau site 24sevres.
        </p>{" "}
        <a
          href="http://www.larevuedudigital.com/signe-des-temps-le-site-e-commerce-de-lvmh-24sevres-sappuie-sur-les-micro-services/"
          target="_blank"
        >
          <Button
            theme={{ wh: "black", bl: "#ffffff" }}
            style={{ border: "black 2px solid", padding: "18px 38px" }}
          >
            Lire la suite sur larevuedudigital.com
          </Button>
        </a>
      </Section>

      <Separation theme="#0070c7" style={{ marginTop: "60px" }} />

      <Section>
        <h2>
          Quand les technologies et les méthodes des GAFA permettent aux
          retailers d’accélérer leur mutation{" "}
        </h2>
        <Image image={Tribune} />
        <p>
          API first, container, cloud, micro-services… Ces technologies enfin à
          la portée de tous permettent aux acteurs plus modestes de rivaliser
          avec les géants du Web.
        </p>{" "}
        <a
          href="https://www.relationclientmag.fr/Thematique/data-room-1252/Breves/Tribune-Quand-technologies-methodes-GAFA-permettent-retailers-accelerer-leur-mutation-321071.htm#Fs9uVfbQKsqX5By7.97"
          target="_blank"
        >
          <Button
            theme={{ wh: "black", bl: "#ffffff" }}
            style={{ border: "black 2px solid", padding: "18px 38px" }}
          >
            Lire la suite sur relationclientmag.fr
          </Button>
        </a>
      </Section>

      <Separation theme="#0070c7" style={{ marginTop: "60px" }} />

      <Section>
        <h2>
          Analyse & Tracking des clients en magasin : une fausse réponse à un
          vrai problème
        </h2>
        <Image image={AdobeStock} />
        <p>
          Pour lutter contre les e-commerçants, les retailers tentent de mettre
          à profit la puissance de la data. Le 11 janvier à New-York, se tenait
          le Big Retail Show (NRF) pendant lequel furent présentées toutes les
          dernières innovations. Mais devant cette débauche de technologie (et
          de coûts associés) une (seule) question reste en suspens : est-ce bien
          le moment d’y aller ?
        </p>{" "}
        <a
          href="https://www.journaldunet.com/ebusiness/expert/60465/analyse---tracking-des-clients-en-magasin---une-fausse-reponse-a-un-vrai-probleme.shtml"
          target="_blank"
        >
          <Button
            theme={{ wh: "black", bl: "#ffffff" }}
            style={{ border: "black 2px solid", padding: "18px 38px" }}
          >
            Lire la suite sur journaldunet.com
          </Button>
        </a>
      </Section>
      <Separation theme="#0070c7" style={{ marginTop: "60px" }} />
      <Section>
        <h2>Et si vous passiez (enfin) au m-commerce ?</h2>
        <Image image={Trust} />
        <p>
          Avec un taux d’équipement en smartphones qui ne cesse de croître, il
          devient nécessaire de développer une offre séduisante de commerce sur
          mobile. Nos conseils pour mieux la valoriser et fidéliser les clients.
        </p>{" "}
        <a
          href="https://www.lesechos.fr/2015/07/et-si-vous-passiez-enfin-au-m-commerce-267592"
          target="_blank"
        >
          <Button
            theme={{ wh: "black", bl: "#ffffff" }}
            style={{ border: "black 2px solid", padding: "18px 38px" }}
          >
            Lire la suite sur les echos.fr
          </Button>
        </a>
      </Section>
      <Separation theme="#0070c7" style={{ marginTop: "60px" }} />
      <Section>
        <h2>La PME à suivre : Oyez ! fait converger le Web et le magasin</h2>
        <Image image={PME} />
        <p>
          L’agence parisienne Oyez ! Contact digital est née en 2006. Henri
          Danzin, designer, et Olivier Nachba, informaticien, l’ont fondée pour
          appliquer leurs idées sur le numérique au commerce de détail, à la
          presse et aux entreprises de services.
        </p>{" "}
        <a
          href="https://www.lesechos.fr/2014/09/la-pme-a-suivre-oyez-fait-converger-le-web-et-le-magasin-309108"
          target="_blank"
        >
          <Button
            theme={{ wh: "black", bl: "#ffffff" }}
            style={{ border: "black 2px solid", padding: "18px 38px" }}
          >
            Lire la suite sur les echos.fr
          </Button>
        </a>
      </Section>
      <Separation theme="#0070c7" style={{ marginTop: "60px" }} />
      <Section>
        <h2>BFM Business / Made in Paris: Présentation d’Oyez</h2>
        <Image image={BFM} />
        <p>
          Made in Paris avec Henri Danzin, co-président de Oyez dans Paris est à
          vous, présenté par Karine Vergniol et Aurélie Blonde, sur BFM
          Business.
        </p>{" "}
        <a
          href="https://bfmbusiness.bfmtv.com/mediaplayer/video/made-in-paris-henri-danzin-president-de-oyez-paris-est-a-vous-10-juin-24-56639.html"
          target="_blank"
        >
          <Button
            theme={{ wh: "black", bl: "#ffffff" }}
            style={{
              border: "black 2px solid",
              padding: "18px 38px",
              marginBottom: "50px",
            }}
          >
            Lire la suite sur les bfmtv.com
          </Button>
        </a>
      </Section>
    </div>
  );
};

export default MediasContents;
