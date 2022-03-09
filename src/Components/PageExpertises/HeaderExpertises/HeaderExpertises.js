import React from "react";
import styled from "styled-components";
import HeaderExpertise from "../../../Images/HeaderExpertises.jpg";
import { Content, Span } from "../../HomePage/Header/Header";
import { Separation } from "../../HomePage/Separation/Separation";
const HeaderStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;700&display=swap");
  background-image: url(${HeaderExpertise});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 380px;
  Span {
    font-size: 22px;
  }
  Separation {
    paddin-top: 150px;
  }
`;

const HeaderExpertises = () => {
  return (
    <HeaderStyle>
      <Content style={{ paddingTop: "130px" }} className="container">
        <h1 style={{ backgroundColor: "transparent", margin: 0 }}>
          Expertises
        </h1>
        <Span
          theme="#D43A75"
          style={{
            marginLeft: "-120px",
            backgroundColor: "white",
            marginTop: "10px",
          }}
        >
          #NEWRETAIL #UNICANAL #DATA #PHYGITAL #MARKETINGASASERVICE
        </Span>
      </Content>{" "}
    </HeaderStyle>
  );
};

export default HeaderExpertises;
