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
          <div class="counter">13</div>
          <Subject>% DU C.A. GLOBAL (SOURCE BUT/LSA 2013) {">"} </Subject>
        </Column>
        <ColumnWithBorder>
          <div class="counter">900</div>
          <Subject>TABLETTES VENDEURS</Subject>
        </ColumnWithBorder>
        <ColumnWithBorder>
          <div class="counter">280</div>
          <Subject>MAGASINS DÉPLOYÉS </Subject>
        </ColumnWithBorder>
      </Row>
    </div>
  );
};

export default Counter;
