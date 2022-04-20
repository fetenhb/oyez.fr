import React from "react";
import styled from "styled-components";
import { Row, Subject, Column } from "../../ProjectsStyle";
export const ColumnWithBorder = styled(Column)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
  height: 30%;
`;
const Counter = () => {
  return (
    <div className="container ">
      <Row>
        <Column>
          {" "}
          <div className="counter">80</div>
          <Subject>PAYS </Subject>
        </Column>
        <ColumnWithBorder>
          <div className="counter">2</div>
          <Subject>MODES D’UTLISATION ONLINE ET OFFLINE</Subject>
        </ColumnWithBorder>
        <ColumnWithBorder>
          <div className="counter">1</div>
          <Subject>HEURE POUR METTRE À JOUR LA DATA </Subject>
        </ColumnWithBorder>
      </Row>
    </div>
  );
};

export default Counter;
