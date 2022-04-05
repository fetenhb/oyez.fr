import React from "react";
import { Separation } from "../../HomePage/Separation/Separation";
import { Intro } from "../../PageExpertises/ExpertisesComponents/CommerceUnifie";

const Approche = () => {
  return (
    <div className="container">
      {" "}
      <Intro>
        <h1 style={{ fontFamily: "Manrope" }}>Notre approche</h1>
        <p style={{ marginBottom: "20px" }}>
          Les distributeurs sont en quête d’agilité. Tous veulent répondre le
          plus vite possible aux besoins changeants de leurs clients. Pour ce
          faire, ils essayent d’offrir aux métiers les ressources dont ils ont
          besoin. Mais à l’heure où la performance du business repose sur la
          gestion de la DATA et des ruptures technologiques successives, les
          équipes IT doivent tenir le rythme. Celles-ci ont 3 puissants alliés
          pour les assister dans cette tâche : le cloud, les microservices et
          les API.
        </p>
      </Intro>
      <Separation theme="#d43a75" />{" "}
    </div>
  );
};

export default Approche;
