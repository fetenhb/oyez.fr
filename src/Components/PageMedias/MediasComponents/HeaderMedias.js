import React from "react";
import HeaderMedia from "../../../Images/HeaderMedia.jpg";
import { Content, Span } from "../../HomePage/Header/Header";
import { HeaderStyle } from "../../PageExpertises/ExpertisesComponents/HeaderExpertises";

const HeaderMedias = () => {
  return (
    <HeaderStyle image={HeaderMedia}>
      <Content style={{ paddingTop: "130px" }} className="container">
        <h1 style={{ backgroundColor: "transparent", margin: 0 }}>
          Nos prises de parole
        </h1>
        <Span
          theme="#2E99B0"
          style={{
            marginLeft: "-520px",
            backgroundColor: "white",
            marginTop: "10px",
          }}
        >
          #TRIBUNES #INTERVIEW #MEDIA
        </Span>
      </Content>{" "}
    </HeaderStyle>
  );
};

export default HeaderMedias;
