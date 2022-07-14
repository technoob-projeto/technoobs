import React from "react";
import ButtonCards from "../ButtonCards/Button";
import { HomeStyle } from "./styles";

export const JobCardInter = () => {
  return (
    <>
      <HomeStyle>
        <div>
          <div className="descricao">
            <span><small>Banco Inter  </small></span>
            <span><small>Carrinho de compras</small></span>
            <div>
              <small>gold: 100 BRL</small>
              <small>xp: 15</small>
            </div>
          </div>
          <div className="logo__nivel">
            <img src="https://files.clicksergipe.com.br//thumbs.php?arquivo=1/conteudos/2020/05/59326/11893b52f4749e98f9b398ac10165c04.jpg&largura=1200" alt="img" />
            <span><small>
              Descrição: Criar um um carrinho de compras funcional
            </small></span>
            <span>Requisito: nv 2</span>
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
