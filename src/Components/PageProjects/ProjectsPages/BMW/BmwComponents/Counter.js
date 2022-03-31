import React from "react";
import styled from "styled-components";
import { Row, Subject, TwoColumn } from "../../ProjectsStyle";
export const ColumWithBorder = styled(TwoColumn)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
  height: 50%;
`;
const Counter = () => {
  return (
    <div className="container " style={{ maxWidth: "800px" }}>
      <Row>
        <TwoColumn>
          {" "}
          <div class="counter">1</div>
          <Subject>IPAD POUR TOUT PILOTER</Subject>
        </TwoColumn>
        <ColumWithBorder>
          <div class="counter">100</div>
          <Subject>% D’AUTONOMIE POUR LES ÉQUIPES</Subject>
        </ColumWithBorder>
      </Row>
    </div>
  );
};

export default Counter;
