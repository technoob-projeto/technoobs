import React from "react";
import { HeaderStyle } from "./styles";
import logo from "../../assets/logo.png";

import {GiHamburgerMenu} from "react-icons/gi";
import { useContext } from "react";
import { LoginContext } from "../../providers/Login"

const Header = () => {
  const { handleIsOpen } = useContext(LoginContext);

  return (
    <>
      <HeaderStyle>
        <li>
          <GiHamburgerMenu size={50} color="#D9D9D9" />
        </li>
        <li>
          <img className="img__logo" src={logo} alt="" />
        </li>
        <li>
          <button>Home</button>
          <button>Developers</button>
          <button onClick={handleIsOpen}>Login</button>
        </li>
      </HeaderStyle>
    </>
  );
};

export default Header;
