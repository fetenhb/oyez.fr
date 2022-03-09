import React from "react";
import styled from "styled-components";
import HeaderExpertise from "../../../Images/HeaderExpertises.jpg";
import { Content, Span } from "../../HomePage/Header/Header";
const HeaderStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;700&display=swap");
  background-image: url(${HeaderExpertise});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 380px;
`;

const HeaderExpertises = () => {
  return (
    <HeaderStyle>
      <Content>
        <h1 style={{ backgroundColor: "transparent" }}>Expertises</h1>
        <Span
          theme="#D43A75"
          style={{ marginLeft: "-200px", backgroundColor: "white" }}
        >
          #NEWRETAIL #UNICANAL #DATA #PHYGITAL #MARKETINGASASERVICE
        </Span>
      </Content>
    </HeaderStyle>
  );
};

export default HeaderExpertises;
