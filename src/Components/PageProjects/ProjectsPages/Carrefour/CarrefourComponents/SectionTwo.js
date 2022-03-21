import React from "react";
import { MiniParagraph, SubTitle } from "../../ProjectsStyle";

const SectionTwo = () => {
  return (
    <div className="container">
      <strong>
        {" "}
        <SubTitle>Une UX BtoBtoC</SubTitle>
      </strong>
      <MiniParagraph>
        L’interface a été conçue pour pouvoir être partagée avec le client. Ce
        nouveau service en magasin révolutionne l’expérience shopping en créant
        une nouvelle relation entre vendeurs et clients. Grâce à la mobilité, le
        vendeur se déplace dans les rayons aux côtés du client. Au-delà de la
        présentation de produits absents des espaces d’exposition, le vendeur
        peut présenter à son client les caractéristiques complémentaires d’un
        produit présent ou ses options de financement.
      </MiniParagraph>
    </div>
  );
};

export default SectionTwo;
