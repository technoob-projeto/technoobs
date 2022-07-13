import React from "react";
import { HeaderStyle } from "./styles";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { LoginContext } from "../../providers/Login";

const Header = () => {
  const { handleIsOpen } = useContext(LoginContext);

  return (
    <>
      <HeaderStyle>
        <li>
          <img className="img__logo" src={logo} alt="" />
        </li>
        <li>
          <button>Developers</button>
          <button onClick={handleIsOpen}>Login</button>
        </li>
      </HeaderStyle>
    </>
  );
};

export default Header;
