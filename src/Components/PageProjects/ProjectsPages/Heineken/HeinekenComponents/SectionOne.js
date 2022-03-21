import React from "react";
import { SectionOneStyle } from "../../ProjectsStyle";

const SectionOne = () => {
  return (
    <div className="container">
      <SectionOneStyle>
        <h5>
          <strong> Notre vision</strong>
        </h5>

        <p style={{ fontWeight: "700" }}>
          Une solution d’affichage dynamique en point de vente pour cibler la
          communication et motiver l’achat d’impulsion.
        </p>
      </SectionOneStyle>
    </div>
  );
};

export default SectionOne;
