import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) => props.theme.wh};
  font-family: "Montserrat", sans-serif;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 20px 40px;
  line-height: 12px;
  cursor: pointer;
  border: none;
  text-align: center;
  background-color: ${(props) => props.theme.bl};
  align-self: flex-start;
  border-radius: 50px;
  font-weight: 700;
  margin-top: 20px;
  margin-left: 15px;
  &:hover {
    background-color: ${(props) => props.theme.wh};
    color: ${(props) => props.theme.bl};
  }
`;
const theme = {
  wh: "white",
  bl: "black",
};

const ButtonPlus = () => {
  return (
    <Button theme={theme} style={{ cursor: "pointer" }}>
      En savoir +
    </Button>
  );
};

export default ButtonPlus;
