import React from "react";
import { ButtonComponent } from "./style";
const Button = ({text, color}) => {
  return <ButtonComponent color={color}>{text}</ButtonComponent>;
};

export default Button;
