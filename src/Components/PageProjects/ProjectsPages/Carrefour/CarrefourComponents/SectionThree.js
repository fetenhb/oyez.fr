import React from "react";
import styled from "styled-components";

import ensemble from "../../../../../Images/ensemble.png";
import carrefourHero from "../../../../../Images/carrefour-hero-image-1024x507.jpg";

const Image = styled.div`
  text-align: center;
  img {
    width: 70%;
    margin-bottom: 100px;
  }
`;
const SectionThree = () => {
  return (
    <div>
      <figure>
        <Image>
          <img src={ensemble} />
        </Image>
      </figure>{" "}
      <figure>
        {" "}
        <Image>
          <img src={carrefourHero} />
        </Image>
      </figure>
    </div>
  );
};

export default SectionThree;
