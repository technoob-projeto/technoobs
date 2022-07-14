import React from "react";
import { HeaderStyle } from "./styles";
import logo from "../../assets/logo.png";

const HeaderAuth = () => {

  return (
    <>
      <HeaderStyle>
        <li>
          <img className="img__logo" src={logo} alt="" />
        </li>
        <li>
          <button>Logout</button>
        </li>
      </HeaderStyle>
    </>
  );
};

export default HeaderAuth;
