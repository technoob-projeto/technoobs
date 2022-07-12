import React from "react";
import { InputComponent } from "./style";
const SpecialInput = ({ register, nome, ...rest }) => {
  return <InputComponent {...register(nome)} {...rest} />;
};

export default SpecialInput;
