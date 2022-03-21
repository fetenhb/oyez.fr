import React from "react";
import { Link } from "react-router-dom";
import {
  ButtonContact,
  Intro,
  Span,
} from "../../PageExpertises/ExpertisesComponents/CommerceUnifie";
import { List } from "./Engineering";

const DigitalCustomer = () => {
  return (
    <div className="container">
      <Intro>
        <h1 style={{ fontFamily: "Manrope" }}>Digital customer marketing</h1>
        <p style={{ marginBottom: "20px" }}>
          Sans émotions la technologie perd beaucoup de sa valeur. Nous plaçons
          la créativité au cœur de nos expertises pour répondre au mieux aux
          besoins clients.{" "}
        </p>
        <Span>
          La raison en est simple : les émotions participent aux processus
          cognitifs de décision. La réponse à ces émotions est le cœur d’une
          bonne expérience client (UX). Nous associons donc innovation
          technologique et créativité pour concevoir de nouveaux services
          digitaux. Nous réconcilions design et conception technique.
          <br /> <br />
          Nos designers comprennent le potentiel créatif de l’ingénierie et nos
          développeurs apportent tout au long du projet de la pertinence à une
          interface (UI) ou une expérience utilisateur (UX), chaque équipe
          apportant à l’autre un regard frais et un recul précieux.
          <br /> <br /> Nous accompagnons nos clients dans l’élaboration de
          services et de plateformes qui placent l’utilisateur au cœur du
          dispositif sur l’ensemble des canaux.
        </Span>
      </Intro>
      <List>
        <ul>
          <li>Apps</li>
          <li>Machine Learning</li>
          <li>IoT</li>
          <li>Bots</li>
        </ul>
      </List>{" "}
      <List>
        <ul>
          <li>Real time 3D</li>
          <li>AR & VR</li>
          <li>Smart-screen</li>
          <li>Robotic Process Automation</li>
        </ul>
      </List>
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

export default DigitalCustomer;
