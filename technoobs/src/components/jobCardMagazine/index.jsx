import React from "react";
import ButtonCards from "../ButtonCards/Button";
import { HomeStyle } from "./styles";

export const JobCardMagazine = () => {
  return (
    <>
      <HomeStyle>
        <div>
          <div className="descricao">
            <span><small>Magazine Luiza  </small></span>
            <span><small>Formulário JS</small></span>
            <div>
              <small>gold: 50BRL</small>
              <small>xp: 10</small>
            </div>
          </div>
          <div className="logo__nivel">
            <img src="https://media.glassdoor.com/sqll/382606/magazine-luiza-squarelogo-1564520166281.png" alt="img" />
            <span><small>
              Descrição: Criar um formulario de cadastro
            </small></span>
            <span>Requisito: nv 1</span>
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
