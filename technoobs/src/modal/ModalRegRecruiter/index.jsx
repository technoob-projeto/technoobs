import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input"
import { InputContainer, InputContainerDad, RecruiterStyleForm } from "./styles";



export const ModalRegRecruiter = () => {
  return (
    <RecruiterStyleForm>
      <h2>Register your Company</h2>
      <InputContainerDad>
      <InputContainer>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      </InputContainer> 
      <InputContainer>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      </InputContainer>
      </InputContainerDad>
      <Button text="Register" color="orange"/>      
    </RecruiterStyleForm>
  );
};


