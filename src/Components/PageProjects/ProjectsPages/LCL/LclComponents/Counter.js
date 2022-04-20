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
          <div className="counter">65</div>
          <Subject>ÉCRANS HÉTÉROGÈNES</Subject>
        </Column>
        <ColumnWithBorder>
          <div className="counter">80</div>
          <Subject>TABLETTES EN LIBRE-SERVICE</Subject>
        </ColumnWithBorder>
        <ColumnWithBorder>
          <div className="counter">1</div>
          <Subject>CMS UNIQUE POUR TOUT GÉRER </Subject>
        </ColumnWithBorder>
      </Row>
    </div>
  );
};

export default Counter;
