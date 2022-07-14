import React from "react";
import ButtonCards from "../ButtonCards/Button";
import { HomeStyle } from "./styles";

export const JobCardNuBank = () => {
  return (
    <>
      <HomeStyle>
        <div>
          <div className="descricao">
            <span><small>Nu Bank  </small></span>
            <span><small>Sistema de dialogo NPC</small></span>
            <div>
              <small>gold: 70 BRL</small>
              <small>xp: 20</small>
            </div>
          </div>
          <div className="logo__nivel">
            <img src="https://nubank.com.br/images/nu-icon.png?v=2" alt="img" />
            <span><small>
              Descrição: Criar um NPC
            </small></span>
            <span>Requisito: nv 3</span>
          </div>
          <div className="botoes">
            <ButtonCards   text="Get task" color="orange"/>
            <ButtonCards text="Messenge" color="green"/>
          </div>

        </div>
      </HomeStyle>
    </>
  );
};
