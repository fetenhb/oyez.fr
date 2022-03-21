import styled from "styled-components";
import React from "react";
import { Content, Span } from "../../HomePage/Header/Header";
import { HeaderStyle } from "../../PageExpertises/ExpertisesComponents/HeaderExpertises";
import HeaderContact from "../../../Images/HeaderContact.jpg";
export const HeaderContent = styled(Content)`
  paddingtop: 130px;
  h1 {
    background-color: transparent;
    margin: 0;
    font-size: 60px;
  }
  Span {
    margin-left: -320px;
    background-color: white;
    margin-top: 20px;
    font-size: 20px;
  }
`;
const ContactHeader = () => {
  return (
    <HeaderStyle image={HeaderContact}>
      {" "}
      <HeaderContent className="container">
        <h1>Contact</h1>
        <Span theme="#0070C7">
          #NOUSREJOINDRE #INFORMATIONS #NOUSRENCONTRER
        </Span>
      </HeaderContent>{" "}
    </HeaderStyle>
  );
};

export default ContactHeader;
