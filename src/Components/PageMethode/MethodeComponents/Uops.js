import React from "react";
import {
  Intro,
  Span,
} from "../../PageExpertises/ExpertisesComponents/CommerceUnifie";

const Uops = () => {
  return (
    <div className="container">
      {" "}
      <Intro style={{ marginTop: "50px" }}>
        <h1 fontFamily={"manrope"}>
          2Uops : Bien concevoir, bien développer, bien exploiter ensemble !
        </h1>
        <p>
          Notre méthode 2Uops est la fusion d’une approche Design Thinking
          (concevant un projet autour du triptyque désirabilité, faisabilité,
          viabilité) et la culture DevOps qui assure la bonne collaboration
          entre les équipes techniques.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "40px",
          }}
        >
          <Span style={{ width: "50%", padding: "0 15px" }}>
            Nous associons la désirabilité d’une expérience utilisateur à son
            utilité et à son utilisabilité (les 2 « U »). Et nous associons la
            faisabilité et la viabilité d’un projet à la bonne collaboration
            entre ceux qui développent et ceux qui exploitent (DevOps).
          </Span>
          <Span style={{ width: "50%", padding: "0 15px" }}>
            L’objectif est de garantir la qualité d’un projet de bout en bout,
            autant du point de vue de l’utilisateur, que du développeur et de
            ceux qui l’exploitent, pour maximiser ainsi les chances de succès.
          </Span>
        </div>
      </Intro>
    </div>
  );
};

export default Uops;
