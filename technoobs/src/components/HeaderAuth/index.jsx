import React from "react";
import { HeaderStyle } from "./styles";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { LoginContext } from "../../providers/Login";

const HeaderAuth = () => {
  const { handleIsOpen } = useContext(LoginContext);

  return (
    <>
      <HeaderStyle>
        <li>
          <img className="img__logo" src={logo} alt="" />
        </li>
        <li>
          <button onClick={handleIsOpen}>Logout</button>
        </li>
      </HeaderStyle>
    </>
  );
};

export default HeaderAuth;
