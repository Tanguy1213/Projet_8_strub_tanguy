import React from 'react';
import Logo from '../../assets/Logo.svg';
import { NavLink } from 'react-router-dom';


function Header() {
  return (
    <header className='header'>
      <div className='logo-container'>
        <img src={Logo} alt=''></img>
      </div>
      <nav className='navigation'>
        <ul className='navigation-lien-style'>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/About">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header