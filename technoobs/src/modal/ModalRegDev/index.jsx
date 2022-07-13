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
import { CandidateContext } from "../../providers/Candidate";

import SpecialInput from "../../components/SpecialInput";

export const ModalRegDev = ({ closeModal }) => {
  const { setCandidate } = useContext(CandidateContext);

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("insira um nome valido!")
      .matches("^[a-zA-Z´]+[a-zA-Z´]{0,}$", "Apenas letras"),

    email: yup
      .string()
      .required("insira um email valido!")
      .email("isso parece um email pra voce?"),

    social: yup
      .string()
      .required("site porfavor"),
      

    country: yup
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

    bio: yup.string().required("insira uma bio!"),
    profession: yup.string().required("insira uma profissão!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
   
    setCandidate(data);
  };

  return (
    <>
      <RecruiterStyleForm onSubmit={handleSubmit(onSubmit)}>
        <MdCancel className="button__close" onClick={closeModal}></MdCancel>
        <h2>Register</h2>
        <InputContainerDad>
          <InputContainer>
            <LabelStyle>NOME:</LabelStyle>
            <Input register={register} nome="name" />
            <span>{errors?.name?.message}</span>
            <LabelStyle>SEU EMAIL:</LabelStyle>
            <Input register={register} nome="email" />
            <span>{errors?.email?.message}</span>

            <LabelStyle>SEU LINK:</LabelStyle>
            <Input register={register} nome="social" />
            <span>{errors?.url?.message}</span>

            <LabelStyle>SUA IDADE:</LabelStyle>
            <Input register={register} nome="age" />
            <span>{errors?.age?.message}</span>

            <LabelStyle>ONDE MORA?</LabelStyle>
            <Input register={register} nome="country" />

            <span>{errors?.country?.message}</span>

            <span>{errors?.function?.message}</span>
            <LabelStyle>SENHA</LabelStyle>
            <Input register={register} nome="password" />
            <span>{errors?.password?.message}</span>
            <LabelStyle>CONFIRME SENHA</LabelStyle>
            <Input register={register} nome="passwordconfirm" />
            <span>{errors?.passwordconfirm?.message}</span>
          </InputContainer>

          <InputContainer>
            <LabelStyle>PERSONAL BIO:</LabelStyle>
            <Input register={register} nome="bio" />
            <span>{errors?.bio?.message}</span>

            <LabelStyle>PROFESSION:</LabelStyle>
            <Input register={register} nome="profession" />
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
