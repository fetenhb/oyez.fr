import React from "react";
import mdm from "../../../../../Images/MDM-cover2.jpg";
import infinity from "../../../../../Images/infinity1.gif";

import {
  ImgColumn,
  PizzaImg,
  Projet,
  Row,
  SectionProjet,
  BackColumn,
} from "../../ProjectsStyle";

const Projets = () => {
  return (
    <>
      <Projet>
        <SectionProjet className="container">
          Ces projets peuvent aussi vous intéresser…
        </SectionProjet>
      </Projet>{" "}
      <div style={{ display: "block" }}>
        <ImgColumn>
          <BackColumn imgUrl={infinity} />
        </ImgColumn>
        <ImgColumn>
          <BackColumn imgUrl={mdm} />
        </ImgColumn>
      </div>
    </>
  );
};

export default Projets;
