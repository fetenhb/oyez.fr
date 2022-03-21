import React from "react";
import styled from "styled-components";
import saint from "../../../../../Images/Saint-Laurent.jpg";

import { Header, P } from "../../ProjectsStyle";

export const HeaderWithImg = styled.div`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.bgImage});
  width: 100%;
`;
const SaintLaurentHeader = () => {
  return (
    <div>
      {" "}
      <HeaderWithImg bgImage={saint}>
        <Header bgc="rgba(0, 0, 0, 0.5)">
          {" "}
          <div style={{ padding: "130px 0" }} className="container">
            <h1>Saint Laurent</h1>
            <P theme="#FCD680">
              <strong>Lookbook digitalisé</strong>
            </P>
          </div>
        </Header>
      </HeaderWithImg>
    </div>
  );
};

export default SaintLaurentHeader;
