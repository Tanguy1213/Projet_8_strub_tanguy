import React from "react";
import Logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import "./header.scss";

function Header() {
  return (
    <header>
      <NavLink to="/">
        <img className="logo-style" src={Logo} alt=""></img>
      </NavLink>
      <nav className="navigation">
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/About">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
