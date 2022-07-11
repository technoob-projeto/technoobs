import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input";
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
  TechList,
} from "./styles";
import { CandidateContext } from "../../Providers/candidate/candidate";
import SpecialInput from "../../components/SpecialInput";

export const ModalRegDev = ({ closeModal }) => {
  const { setCandidate } = useContext(CandidateContext);

  const formSchema = yup.object().shape({
    nome: yup
      .string()
      .required("insira um nome valido!")
      .matches("^[a-zA-Z´]+[a-zA-Z´]{0,}$", "Apenas letras"),

    email: yup
      .string()
      .required("insira um email valido!")
      .email("isso parece um email pra voce?"),

    social: yup
      .string()
      .required("site porfavor")
      .url("Isso não parece um site"),
    idade: yup
      .number()
      .required("obrigatorio!")
      .positive("Use um numero positivo.")
      .integer("Use um numero inteiro!"),

    cidade: yup
      .string()
      .required("Onde voce vive?")
      .matches("^[a-zA-Z´]+[a-zA-Z´]{0,}$", "apenas letras"),

    password: yup.string().min(8, "Minimo 8 digitos").required("Obrigatorio"),
    passwordconfirm: yup
      .string()
      .required("Confime a senha")
      .oneOf([yup.ref("password")], "Senhas não conferem"),

    password: yup.string().min(8, "Minimo 8 digitos").required("Obrigatorio"),
    passwordconfirm: yup
      .string()
      .required("Confime a senha")
      .oneOf([yup.ref("password")], "Senhas não conferem"),

    bio: yup
      .string()
      .required("insira um nome valido!")
      .matches("^[a-zA-Z´]+[a-zA-Z´]{0,}$", "Apenas letras"),

    profession: yup
      .string()
      .required("insira um nome valido!")
      .matches("^[a-zA-Z´]+[a-zA-Z´]{0,}$", "Apenas letras"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    const type = { type: "candidate", myjobs: [] };
    const dataCandidate = { ...data, ...type };
    console.log("submit", dataCandidate);
    setCandidate(dataCandidate);
  };

  return (
    <>
      <RecruiterStyleForm onSubmit={handleSubmit(onSubmit)}>
        <MdCancel className="button__close" onClick={closeModal}></MdCancel>
        <h2>Register your Company</h2>
        <InputContainerDad>
          <InputContainer>
            <LabelStyle>NAME:</LabelStyle>
            <Input register={register} nome="name" />
            <span>{errors?.name?.message}</span>
            <LabelStyle>YOUR MAIN EMAIL:</LabelStyle>
            <Input register={register} nome="email" />
            <span>{errors?.bio?.message}</span>
            <LabelStyle>YOUR SOCIAL:</LabelStyle>
            <Input register={register} nome="social" />
            <span>{errors?.email?.message}</span>
            <LabelStyle>YOUR AGE:</LabelStyle>
            <Input register={register} nome="age" />
            <span>{errors?.site?.message}</span>

            <LabelStyle>WHERE DO U LIVE?</LabelStyle>
            <Input register={register} nome="username" />
            <span>{errors?.username?.message}</span>

            <span>{errors?.function?.message}</span>
            <LabelStyle>PASSWORD</LabelStyle>
            <Input register={register} nome="password" />
            <span>{errors?.password?.message}</span>
            <LabelStyle>PASSWORD CONFIRM</LabelStyle>
            <Input register={register} nome="passwordconfirm" />
            <span>{errors?.passwordconfirm?.message}</span>
          </InputContainer>

          <InputContainer>
            <LabelStyle>PERSONAL BIO:</LabelStyle>
            <textarea register={register} nome="name" />

            <span>{errors?.name?.message}</span>
            <LabelStyle>PROFESSION:</LabelStyle>
            <Input register={register} nome="bio" />
            <span>{errors?.bio?.message}</span>
            <TechList>
              <LabelStyle>YOUR MAIN SKILLS:</LabelStyle>
              <div>
                <LabelStyle for="JavaScript"> JavaScript</LabelStyle>
                <SpecialInput
                  register={register}
                  type="checkbox"
                  nome="JavaScript"
                />
              </div>
              <div>
                <LabelStyle for="CSS">CSS </LabelStyle>
                <SpecialInput register={register} type="checkbox" nome="CSS" />
              </div>
              <div>
                <LabelStyle for="C#">C#</LabelStyle>
                <SpecialInput register={register} type="checkbox" nome="C#" />
              </div>
              <div>
                <LabelStyle for="C++">C++ </LabelStyle>
                <SpecialInput register={register} type="checkbox" nome="C++" />
              </div>

              <div>
                <LabelStyle for="PHP"> PHP</LabelStyle>
                <SpecialInput register={register} type="checkbox" nome="PHP" />
              </div>

              <div>
                <LabelStyle for="Python"> Python</LabelStyle>
                <SpecialInput
                  register={register}
                  type="checkbox"
                  nome="Python"
                />
              </div>
            </TechList>
          </InputContainer>
        </InputContainerDad>
        <Button ty="submit" text="Register" color="orange" />
      </RecruiterStyleForm>
    </>
  );
};
