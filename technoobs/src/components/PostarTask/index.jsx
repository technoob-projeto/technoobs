import React from "react";
import { DevCard } from "../DevCard";
import { HomeStyle } from "./styles";

export const PostarTask = () => {
  return (
    <>
      <HomeStyle>
        <div>
          <small>Titulo:</small>
          <small> Descrição: </small>
          <small>Linguagem:</small>
          <small>Requisito Nv: 1</small>
          <small>Vagas:(devs) 2</small>

          <small>Status:Aberto</small>
          <small>Type:Job/Task</small>
        </div>
        <div>
          <p>Display Card Candidatos:</p>
          <DevCard />
        </div>
      </HomeStyle>
    </>
  );
};
