import React from "react";
import styled from "styled-components";
import google from "../../Images/google.png";
import elastic from "../../Images/elastic.png";
import apollo from "../../Images/apollo.png";
const Partenaire = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 50px;
  margin-bottom: 100px;
`;
const Partenaires = () => {
  return (
    <div className="container">
      <h1>Partenaires</h1>
      <Partenaire>
        {" "}
        <img src={google} />
        <img src={elastic} />
        <img src={apollo} />
      </Partenaire>
    </div>
  );
};

export default Partenaires;
