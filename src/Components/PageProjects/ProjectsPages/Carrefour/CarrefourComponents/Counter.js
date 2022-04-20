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
          <div className="counter">3</div>
          <Subject>% DE CA GÉNÉRÉ EN PLUS DANS LES MAGASINS ÉQUIPÉS </Subject>
        </TwoColumn>
        <ColumWithBorder>
          <div className="counter">250</div>
          <Subject>MAGASINS ÉQUIPÉS </Subject>
        </ColumWithBorder>
      </Row>
    </div>
  );
};

export default Counter;
