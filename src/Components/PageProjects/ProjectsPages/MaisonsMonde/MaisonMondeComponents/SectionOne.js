import React from "react";
import { Container, SectionOneStyle } from "../../ProjectsStyle";

const SectionOne = () => {
  return (
    <Container>
      <SectionOneStyle>
        <h5>
          <strong> Notre vision</strong>
        </h5>
        <ul>
          <li>
            {" "}
            <p>Fluidifier la vente par la mobilité</p>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <p>
              Faciliter le conseil en offrant un accès instantané aux
              informations clés
            </p>
          </li>
        </ul>{" "}
        <ul>
          <li>
            {" "}
            <p>Vendre plus en proposant les produits non-exposés</p>
          </li>
        </ul>
      </SectionOneStyle>
    </Container>
  );
};

export default SectionOne;
