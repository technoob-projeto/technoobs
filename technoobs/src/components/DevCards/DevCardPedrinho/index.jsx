import React from "react";
import ButtonCards from "../../ButtonCards/Button";
import { HomeStyle } from "./styles";

export const DevCardPedrinho = () => {
  return (
    <>
      <HomeStyle>
        <div className="informacoes">
          <div className="avatar">
            <span><small>Pedro Taskeira</small></span>
            <span className="imagem__avatar"><img src="	https://avatars.dicebear.com/api/bottts/1000.svg" alt="avatar"/></span>
          </div>
          <div className="info">
            <span><small>Class: Back End</small></span>
            <span><small> Bio: Quase pleno</small></span>
            <span><small> Email: pedro@gmail.com</small></span>
            <span><small>GitHub: @pedrinho1234</small></span>
            <span><small>País: Brasil</small></span>
            <span><small>Cidade: Rio Branco</small></span>
          </div>
        </div>
        <div>
          <img className="estrelas" src="https://1.bp.blogspot.com/-hYEb8CYUj0Y/XaCzl-8CIuI/AAAAAAAAGS0/tAD7OZj_AYkiEPVFGR4TjKFTao0bp9jVwCLcBGAsYHQ/s1600/4%2Bestrelas.png" alt="Estrelas"/>
        </div>
        <div>
          Skill:
          <p>PHP</p>
          <p>javascript</p>
        </div>

        <div>
          <p>Tasks</p>
          <p>Total Xp: 300</p>
        <ButtonCards text="Detalhes" color="green"/>
        <ButtonCards text="Contato" color="orange"/>
        </div>
      </HomeStyle>
    </>
  );
};
