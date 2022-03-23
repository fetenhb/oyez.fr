import React from "react";
import { Container, Paragraph, SectionTitle } from "../../ProjectsStyle";

const SectionTwo = () => {
  return (
    <Container>
      <SectionTitle>
        {" "}
        <strong> Assister les vendeurs</strong>{" "}
      </SectionTitle>
      <Paragraph>
        Un assistant mobile pour cibler et convaincre. Le vendeur accède
        instantanément aux informations décisives pour vendre : stock,
        caractéristiques,… Il peut également comparer des produits et pousser
        des produits et services associés. Enfin, il peut projeter sur les
        écrans du magasin les contenus nécessaires pour étayer son argumentaire.
      </Paragraph>
    </Container>
  );
};

export default SectionTwo;
