import React from "react";
import { HeaderStyle } from "../../PageExpertises/ExpertisesComponents/HeaderExpertises";
import HeaderServices from "../../../Images/HeaderServices.jpg";
import { HeaderContent } from "../../PageContact/ContactComponents/ContactHeader";
import { Span } from "../../HomePage/Header/Header";
import styled from "styled-components";

const HeaderService = styled(HeaderContent)`
  padding-top: 130px;
  h1 {
    font-family: Montserrat !important;
  }
  Span {
    margin-top: 10px;
  }
`;
const ServicesHeader = () => {
  return (
    <HeaderStyle image={HeaderServices}>
      <HeaderService>
        <h1>Services</h1>
        <Span theme="#0070C7">
          #ENGINEERING #DESIGN TECHNOLOGIQUE #CONSULTING
        </Span>
      </HeaderService>{" "}
    </HeaderStyle>
  );
};

export default ServicesHeader;
