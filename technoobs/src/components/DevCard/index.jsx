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
            <span className="imagem__avatar"><img src="" alt="avatar"/>*Imagem*</span>
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
          <img src="" alt="Estrelas"/>
        </div>
        <div>Nota: 4/5</div>

        <div>
          Skill:
          <p>Javascript</p>
          <p>CSS</p>
        </div>

        <div>
          <p>Tasks</p>
          <p>Total Xp: 300</p>
        <ButtonCards text="Ver perfil" color="green"/>
        </div>
      </HomeStyle>
    </>
  );
};
