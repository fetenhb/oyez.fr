import React from "react";
import { SectionOneStyle } from "../../ProjectsStyle";

const SectionOne = () => {
  return (
    <div className="container">
      <SectionOneStyle>
        <h5>
          <strong> Notre vision</strong>
        </h5>
        <p>
          Une solution d’affichage dynamique qui rend le magasin totalement
          autonome dans la gestion de ses contenus.
        </p>
      </SectionOneStyle>
    </div>
  );
};

export default SectionOne;
