import React from "react";
import ButtonCards from "../ButtonCards/Button";
import { HomeStyle } from "./styles";

export const TaskCardItau = () => {
  return (
    <>
      <HomeStyle>
        <div>
          <div className="descricao">
            <span><small>Banco Itaú Digital</small></span>
            <span><small>Dev Junior - contrato PJ</small></span>
            <div>
              <small>gold: 3300 BRL</small>
              <small>xp: 300</small>
            </div>
          </div>
          <div className="logo__nivel">
            <img src="data:image/png;base64,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" alt="img" />
            <span><small>
              Descrição: Criar templates e funcionalidades com JS
            </small></span>
            <span>Requisito: nv 3</span>
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
