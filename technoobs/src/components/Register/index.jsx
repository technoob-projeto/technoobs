import React from "react";
import { HomeStyle } from "./styles";
import { ModalRegRecruiter } from "../../modal/ModalRegRecruiter";
import { ModalRegDev } from "../../modal/ModalRegDev";

export const Register = ({ isDev, closeModal }) => {

  return (
    <>
      <HomeStyle>
        {isDev ? (
          <ModalRegDev closeModal={closeModal}/>
        ) : (
          <ModalRegRecruiter closeModal={closeModal} />
        )}
      </HomeStyle>
    </>
  );
};
