import React from "react";
import { Button } from "./ButtonPlus";
const ButtonPlusBlack = (theme) => {
  return (
    <Button
      theme={{ wh: "black", bl: "#ffffff" }}
      style={{ border: "black 2.2px solid", padding: "18px 38px" }}
    >
      <strong> En savoir +</strong>
    </Button>
  );
};

export default ButtonPlusBlack;
