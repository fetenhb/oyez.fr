import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import methodes from "../../../Images/Méthodes.jpg";
import ButtonPlusBlack from "../Button/ButtonPlusBlack";
const MethodeStyle = styled.div`
  background-image: url(${methodes});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-bottom: 50px;
  padding-top: 50px;
  width: 100%;
  height: auto;
  h1 {
    font-family: "Montserrat light";
    margin-bottom: 60px;
    width: 420px;
  }
  p {
    font-family: "Montserrat light";
    margin-bottom: 50px;
    width: 420px;
    font-weight: 400;
    color: black;
  }
`;
const Methode = () => {
  return (
    <MethodeStyle>
      <div className="container">
        <h1>Méthode</h1>
        <p>
          Nous associons design, usages, utilisateurs, conception et production
          pour faire des projets digitaux des vecteurs de transformation des
          organisations.
        </p>
        <Link to="/methode-groupe-oyez">
          {" "}
          <ButtonPlusBlack />
        </Link>{" "}
      </div>
    </MethodeStyle>
  );
};

export default Methode;
