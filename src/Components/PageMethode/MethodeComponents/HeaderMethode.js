import React from "react";
import { HeaderStyle } from "../../PageExpertises/ExpertisesComponents/HeaderExpertises";
import HeaderMethodes from "../../../Images/HeaderMethode.jpg";
import { Content, Span } from "../../HomePage/Header/Header";
const HeaderMethode = () => {
  return (
    <HeaderStyle image={HeaderMethodes}>
      {" "}
      <Content style={{ paddingTop: "130px" }} className="container">
        <h1 style={{ backgroundColor: "transparent", margin: 0 }}>Méthode</h1>
        <Span
          theme="#E1AB33"
          style={{
            marginRight: "450px",
            backgroundColor: "white",
            marginTop: "10px",
          }}
        >
          #DESIGNTHINKING #DEVOPS #2UOPS
        </Span>
      </Content>{" "}
    </HeaderStyle>
  );
};

export default HeaderMethode;
