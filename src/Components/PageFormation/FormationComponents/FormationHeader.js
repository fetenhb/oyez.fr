import React from "react";

import formation from "../../../Images/formation.jpg";
import { Content, Span } from "../../HomePage/Header/Header";
import { HeaderStyle } from "../../PageExpertises/ExpertisesComponents/HeaderExpertises";

const FormationHeader = () => {
  return (
    <HeaderStyle image={formation}>
      <Content style={{ paddingTop: "130px" }} className="container">
        <h1
          style={{
            backgroundColor: "transparent",
            margin: 0,
            fontFamily: "Manrope !important",
          }}
        >
          Oyez Tunis
        </h1>
        <Span
          theme="#FF2E4D"
          style={{
            marginLeft: "-450px",
            backgroundColor: "white",
            marginTop: "10px",
          }}
        >
          #FULLSTACK #NEARSHORE #FORMATION
        </Span>
      </Content>{" "}
    </HeaderStyle>
  );
};

export default FormationHeader;
