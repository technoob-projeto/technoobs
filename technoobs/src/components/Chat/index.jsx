import React from "react";
import { HomeStyle } from "./styles";

export const JobCard = () => {
  return (
    <>
      <HomeStyle>
        <div>
          <small>Nome empresa</small>
          <small> Titulo </small>
          <div>
            <small>gold: $$</small>
            <small>xp: 20</small>
          </div>
          <div>
            <img src="" alt="img" />
            <span>Requisito: nv 1</span>
          </div>
          <small>
            descrição dasdsadsadjkasdkasdkasdkaskdkjasdkasjdkjasdjkasjkdaskjdkj
          </small>
          <button>Mensagem</button>
          <button>Get Task</button>
        </div>
      </HomeStyle>
    </>
  );
};
