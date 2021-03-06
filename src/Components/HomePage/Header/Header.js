import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bgHeader from "../../../Images/headerBg.jpg";
import ButtonPlus from "../../HomePage/Button/ButtonPlus";

const HeaderStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;700&display=swap");
  background-image: url(${bgHeader});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 641px;
  margin-bottom: 50px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 180px;
  max-width: 900px;
  margin-right: auto;
  margin-left: auto;
  h1 {
    font-size: 48px;
    background: white;
    color: black;
    font-weight: 700 !important;
    width: 900px;
    line-height: 54px;
    text-align: left;
    font-family: "Manrope", sans-serif;
    @media (max-width: 950px) {
      width: 828px;
      padding-left: 50px;
    }
    @media (max-width: 800px) {
      width: 698px;
      padding-left: 30px;
    }
    @media (max-width: 800px) {
      width: 600px;
    }
    @media (max-width: 600px) {
      width: 500px;
    }
  }
  p {
    margin: 0;
    margin-top: -25px;
    align-self: flex-start;
    background: white;
    padding: 3px;
  }
`;
export const Span = styled.span`
  font-family: "Manrope", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme};
`;

const Header = () => {
  return (
    <Fragment>
      <HeaderStyle>
        {" "}
        <Content>
          <h1>Cloud, microservices et API au coeur du commerce unifié </h1>{" "}
          <p>
            <Span theme="#D43A75">#TECHNOLOGIE </Span>
            <Span theme="#0070C7">#CLOUD </Span>
            <Span theme="#E1AB33">#UNICANAL </Span>
            <Span theme="#D43A75">#OYEZ </Span>
          </p>
          <Link to="/technologie-groupe-oyez-2" style={{ width: "100%" }}>
            {" "}
            <ButtonPlus />
          </Link>
        </Content>
      </HeaderStyle>
    </Fragment>
  );
};

export default Header;
