import React from "react";
import ButtonCards from "../ButtonCards/Button";
import { HomeStyle } from "./styles";

export const TaskCardBMG = () => {
  return (
    <>
      <HomeStyle>
        <div>
          <div className="descricao">
            <span><small>Banco BMG  </small></span>
            <span><small>Dev Junior - contrato PJ</small></span>
            <div>
              <small>gold: 3500 BRL</small>
              <small>xp: 300</small>
            </div>
          </div>
          <div className="logo__nivel">
            <img src="https://seeklogo.com/images/B/banco-bmg-logo-2906912144-seeklogo.com.png" alt="img" />
            <span><small>
              Descrição: Criar templates e funcionalidades com JS
            </small></span>
            <span>Requisito: nv 2</span>
          </div>
          <div className="botoes">
            <ButtonCards   text="Get Job" color="orange"/>
            <ButtonCards text="Messenge" color="green"/>
          </div>

        </div>
      </HomeStyle>
    </>
  );
};
