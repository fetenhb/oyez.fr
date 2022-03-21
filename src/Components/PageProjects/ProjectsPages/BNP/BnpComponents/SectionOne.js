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
          Aucun client ne doit se sentir considéré comme un numéro de compte.
          Véritable assistant digital, la tablette permet d’identifier
          rapidement le visiteur et de cerner ses besoins pour personnaliser
          l’accueil.
        </p>
      </SectionOneStyle>
    </div>
  );
};

export default SectionOne;
