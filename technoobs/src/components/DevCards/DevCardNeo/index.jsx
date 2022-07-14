import React from "react";
import ButtonCards from "../../ButtonCards/Button";
import { HomeStyle } from "./styles";

export const DevCardNeo = () => {
  return (
    <>
      <HomeStyle>
        <div className="informacoes">
          <div className="avatar">
            <span><small>Neo Anderson</small></span>
            <span className="imagem__avatar"><img src="	https://miro.medium.com/fit/c/176/176/2*yf_IB104CjCYFSrI9CBF-A.png" alt="avatar"/></span>
          </div>
          <div className="info">
            <span><small>Class: Escolhido</small></span>
            <span><small> Bio: Desenvolvedor da Matrix</small></span>
            <span><small> Email: neo@gmail.com</small></span>
            <span><small>GitHub: @neo1234</small></span>
            <span><small>País: Subterrâneo</small></span>
            <span><small>Cidade: Zion</small></span>
          </div>
        </div>
        <div>
          <img className="estrelas" src="https://1.bp.blogspot.com/-hYEb8CYUj0Y/XaCzl-8CIuI/AAAAAAAAGS0/tAD7OZj_AYkiEPVFGR4TjKFTao0bp9jVwCLcBGAsYHQ/s1600/4%2Bestrelas.png" alt="Estrelas"/>
        </div>
        <div>
          Skill:
          <p>javascript</p>
          <p>React</p>
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
