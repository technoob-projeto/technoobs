import React from "react";
import ButtonCards from "../../ButtonCards/Button";
import { HomeStyle } from "./styles";

export const DevCardJoao = () => {
  return (
    <>
      <HomeStyle>
        <div className="informacoes">
          <div className="avatar">
            <span><small>João Batista</small></span>
            <span className="imagem__avatar"><img src="	https://avatars.dicebear.com/api/bottts/1000.svg" alt="avatar"/></span>
          </div>
          <div className="info">
            <span><small>Class: Full Stack</small></span>
            <span><small> Bio: Desenvolvedor Jr</small></span>
            <span><small> Email: joaojac@gmail.com</small></span>
            <span><small>GitHub: @joao1234</small></span>
            <span><small>País: Portugal</small></span>
            <span><small>Cidade: Porto</small></span>
          </div>
        </div>
        <div>
          <img className="estrelas" src="https://1.bp.blogspot.com/-hYEb8CYUj0Y/XaCzl-8CIuI/AAAAAAAAGS0/tAD7OZj_AYkiEPVFGR4TjKFTao0bp9jVwCLcBGAsYHQ/s1600/4%2Bestrelas.png" alt="Estrelas"/>
        </div>
        <div>
          Skill:
          <p>Python</p>
          <p>PHP</p>
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
