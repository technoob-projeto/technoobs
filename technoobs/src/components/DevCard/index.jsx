import React from "react";
import ButtonCards from "../ButtonCards/Button";
import { HomeStyle } from "./styles";

export const DevCard = () => {
  return (
    <>
      <HomeStyle>
        <div className="informacoes">
          <div className="avatar">
            <span><small>Luiza anime</small></span>
            <span className="imagem__avatar"><img src="	https://avatars.dicebear.com/api/bottts/1000.svg" alt="avatar"/></span>
          </div>
          <div className="info">
            <span><small>Class: Front End</small></span>
            <span><small> Bio: Desenvolvedora Jr</small></span>
            <span><small> Email: luiza@gmail.com</small></span>
            <span><small>GitHub: @luiza1234</small></span>
            <span><small>País: França</small></span>
            <span><small>Cidade: Paris</small></span>
          </div>
        </div>
        <div>
          <img className="estrelas" src="https://1.bp.blogspot.com/-hYEb8CYUj0Y/XaCzl-8CIuI/AAAAAAAAGS0/tAD7OZj_AYkiEPVFGR4TjKFTao0bp9jVwCLcBGAsYHQ/s1600/4%2Bestrelas.png" alt="Estrelas"/>
        </div>
        <div>Nota: 4/5</div>

        <div>
          Skill:
          <p>Linguagem 1</p>
          <p>Linguagem 1</p>
        </div>

        <div>
          <p>Tasks</p>
          <p>Total Xp: 300</p>
        <ButtonCards text="Ver perfil" color="green"/>
        <ButtonCards text="Editar" color="orange"/>
        </div>
      </HomeStyle>
    </>
  );
};
