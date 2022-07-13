import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input";
import { CompanyContext } from "../../providers/Company";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MdCancel } from "react-icons/md";

import {
  InputContainer,
  InputContainerDad,
  LabelStyle,
  RecruiterStyleForm,
} from "./styles";

export const ModalRegRecruiter = ({ closeModal }) => {
  const { submitRegister } = useContext(CompanyContext);

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome da empresa obrigatorio")
      .matches("^[a-zA-Z´]+[a-zA-Z´]{0,}$", "apenas letras e sem espaços"),
    bio: yup.string().required("Nome obrigatorio"),
    username: yup
      .string()
      .required("Nome de usuario obrigatorio")
      .matches("^[a-zA-Z´]+[a-zA-Z´]{0,}$", "apenas letras"),
    func: yup
      .string()
      .required("Cargo obrigatorio")
      .matches("^[a-zA-Z´]+[a-zA-Z´]{0,}$", "apenas letras"),
    email: yup
      .string()
      .required("Email obrigatorio")
      .email("Isso nao parece um email"),
    site: yup
      .string()
      .required("site obrigatorio")
      .url("Isso nao parece um site"),
    password: yup.string().min(8, "Minimo 8 digitos").required("Obrigatorio"),
    passwordconfirm: yup
      .string()
      .required("Confime a senha")
      .oneOf([yup.ref("password")], "Senhas não conferem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    submitRegister(data);
  };

  return (
    <>
      <RecruiterStyleForm onSubmit={handleSubmit(onSubmit)}>
        <MdCancel className="button__close" onClick={closeModal}></MdCancel>
        <h2>Register your Company</h2>
        <InputContainerDad>
          <InputContainer>
            <LabelStyle>NAME COMPANY</LabelStyle>
            <Input register={register} nome="name" />
            <span>{errors?.name?.message}</span>
            <LabelStyle>BIO COMPANY</LabelStyle>
            <Input register={register} nome="bio" />
            <span>{errors?.bio?.message}</span>
            <LabelStyle>EMAIL</LabelStyle>
            <Input register={register} nome="email" />
            <span>{errors?.email?.message}</span>
            <LabelStyle>SITE</LabelStyle>
            <Input register={register} nome="site" />
            <span>{errors?.site?.message}</span>
          </InputContainer>
          <InputContainer>
            <LabelStyle>USERNAME</LabelStyle>
            <Input register={register} nome="username" />
            <span>{errors?.username?.message}</span>
            <LabelStyle>YOU FUNCTION</LabelStyle>
            <Input register={register} nome="func" />
            <span>{errors?.function?.message}</span>
            <LabelStyle>PASSWORD</LabelStyle>
            <Input type="password" register={register} nome="password" />
            <span>{errors?.password?.message}</span>
            <LabelStyle>PASSWORD CONFIRM</LabelStyle>
            <Input type="password" register={register} nome="passwordconfirm" />
            <span>{errors?.passwordconfirm?.message}</span>
          </InputContainer>
        </InputContainerDad>
        <Button ty="submit" text="Register" color="orange" />
      </RecruiterStyleForm>
    </>
  );
};
