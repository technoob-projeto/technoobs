import React from "react";
import Button from "../Button/Button";
import ButtonCards from "../ButtonCards/Button";
import { HomeStyle } from "./styles";

export const DevCard = () => {
  return (
    <>
      <HomeStyle>
        <div>
          <small>Class: Front End</small>
          <small> Email: </small>
          <small>Social:</small>
          <small>Paiz: Brazil</small>
          <small>cidade: 28</small>
        </div>
        <div>
          <textarea name="bio" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          img
          <span>nv: 0</span>
        </div>
        <div>Nota: 4/5</div>

        <div>
          Skill:
          <p>Lingaugem 1</p>
          <p>Lingaugem 1</p>
          <p>Lingaugem 1</p>
          <p>Lingaugem 1</p>
          <p>Lingaugem 1</p>
        </div>

        <div>
          <p>Tasks</p>
          <p>Total Xp: 300</p>
        <ButtonCards text="Ver perfil" color="green"/>
        </div>
        <div>Edit Profile</div>
      </HomeStyle>
    </>
  );
};
