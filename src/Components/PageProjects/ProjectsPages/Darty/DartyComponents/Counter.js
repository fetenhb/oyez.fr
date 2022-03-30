import React from "react";
import styled from "styled-components";
import { Row, Subject, Column } from "../../ProjectsStyle";
export const ColumnWithBorder = styled(Column)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
  height: 30%;
`;
const Counter = () => {
  return (
    <div className="container " style={{ maxWidth: "800px" }}>
      <Row>
        <Column>
          {" "}
          <div class="counter">97</div>
          <Subject>% DES VENTES RÉALISÉES SUR TABLETTE </Subject>
        </Column>
        <ColumnWithBorder>
          <div class="counter">250</div>
          <Subject>MAGASINS DÉPLOYÉS</Subject>
        </ColumnWithBorder>
        <ColumnWithBorder>
          <div class="counter">3000</div>
          <Subject>VENDEURS ÉQUIPÉS </Subject>
        </ColumnWithBorder>
      </Row>
    </div>
  );
};

export default Counter;
