import React from "react";
import { HeaderStyle } from "./styles";
import logo from "../../assets/logo.png";
import menuicon from "../../assets/menuicon.png";
import {GiHamburgerMenu} from "react-icons/gi"


const Header = () => {
  return (
    <>
      <HeaderStyle>
        <li>
          <GiHamburgerMenu size={50} color="#D9D9D9" />
        </li>
        <li>
          <img className="img__logo" src={logo} />
        </li>
        <li>
          <button>Home</button>
          <button>Developers</button>
          <button>Login</button>
        </li>
      </HeaderStyle>
    </>
  );
};

export default Header;
