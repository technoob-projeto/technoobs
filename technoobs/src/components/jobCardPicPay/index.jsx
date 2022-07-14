import React from "react";
import ButtonCards from "../ButtonCards/Button";
import { HomeStyle } from "./styles";

export const JobCardPicPay = () => {
  return (
    <>
      <HomeStyle>
        <div>
          <div className="descricao">
            <span><small>Pic Pay  </small></span>
            <span><small>Carrinho de compras</small></span>
            <div>
              <small>gold: 15 USD</small>
              <small>xp: 15</small>
            </div>
          </div>
          <div className="logo__nivel">
            <img src="https://pbs.twimg.com/profile_images/1483075861410725889/gXMi4WDW_400x400.png" alt="img" />
            <span><small>
              Descrição: Criar um um carrinho de compras funcional
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
