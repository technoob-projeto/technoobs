import React from "react";
import { ButtonComponent } from "./style";
const Button = ({ty, text, color, callback}) => {
  return <ButtonComponent type={ty} onClick={callback} color={color}>{text}</ButtonComponent>;
};

export default Button;
