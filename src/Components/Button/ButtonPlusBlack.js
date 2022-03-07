import React from "react";
import { Button } from "./ButtonPlus";
const ButtonPlusBlack = (theme) => {
  return (
    <Button
      theme={{ wh: "black", bl: "#ffffff" }}
      style={{ border: "black 2px solid", padding: "18px 38px" }}
    >
      En savoir +
    </Button>
  );
};

export default ButtonPlusBlack;
