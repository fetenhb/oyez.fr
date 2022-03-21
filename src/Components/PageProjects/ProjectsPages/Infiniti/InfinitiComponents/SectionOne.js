import React from "react";
import { SectionOneStyle } from "../../ProjectsStyle";

const SectionOne = () => {
  return (
    <div className="container">
      <SectionOneStyle>
        <h5>
          <strong> Le dispositif</strong>
        </h5>
        <p>
          Des tablettes en libre-service couplées à un écran HD de 50 pouces
          accueillent le client dans un lounge pour l’immerger dans l’univers de
          la marque.
        </p>
      </SectionOneStyle>
    </div>
  );
};

export default SectionOne;
