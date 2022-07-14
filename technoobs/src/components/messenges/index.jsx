import React from "react";
import { HomeStyle } from "./styles";

export const Chat = () => {
  return (
    <>
      <HomeStyle>
        <div>
          <div>
            <p>Mensagens (insira aqui as mensagens)</p>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button type="submit"></button>
          </div>
        </div>
      </HomeStyle>
    </>
  );
};
