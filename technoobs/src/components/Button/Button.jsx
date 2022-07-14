import React from "react";
import { ButtonComponent } from "./style";
const Button = ({ty, text, color, callback, size}) => {
  return <ButtonComponent type={ty}  size={size} onClick={callback} color={color}>{text}</ButtonComponent>;
};

export default Button;
