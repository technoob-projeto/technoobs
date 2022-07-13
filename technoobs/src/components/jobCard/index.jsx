import React from "react";
import Button from "../Button/Button";
import ButtonCards from "../ButtonCards/Button";
import { HomeStyle } from "./styles";

export const JobCard = () => {
  return (
    <>
      <HomeStyle>
        <div>
          <small>Nome empresa</small>
          <small> Titulo </small>
          <div>
            <small>gold: $$</small>
            <small>xp: 20</small>
          </div>
          <div>
            <img src="" alt="img" />
            <span>Requisito: nv 1</span>
          </div>
          <small>
            descrição crir um formulario 
          </small>
         <ButtonCards   text="Get task" color="orange"/>
         <ButtonCards text="Messenge" color="green"/>

        </div>
      </HomeStyle>
    </>
  );
};
