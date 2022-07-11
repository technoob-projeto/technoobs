import React from "react";
import { InputComponent } from "./style";
const Input = ({ register, nome, ...rest }) => {
  return <InputComponent {...register(nome)} {...rest} />;
};

export default Input;
