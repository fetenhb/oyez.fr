import React from "react";

import HeaderTechnologie from "../../../Images/technologies.jpg";
import { Content, Span } from "../../HomePage/Header/Header";
import { HeaderStyle } from "../../PageExpertises/ExpertisesComponents/HeaderExpertises";

const HeaderTechnologies = () => {
  return (
    <HeaderStyle image={HeaderTechnologie}>
      <Content style={{ paddingTop: "130px" }} className="container">
        <h1
          style={{
            backgroundColor: "transparent",
            margin: 0,
            fontFamily: "Manrope",
          }}
        >
          Technologies
        </h1>
        <Span
          theme="#D43A75"
          style={{
            marginLeft: "-520px",
            backgroundColor: "white",
            marginTop: "10px",
          }}
        >
          #CLOUD #MICROSERVICES #API
        </Span>
      </Content>{" "}
    </HeaderStyle>
  );
};

export default HeaderTechnologies;
