import React from 'react';
import LogoFooter from '../../assets/Logo_footer.svg';
import './footer.scss';

function Footer() {
  return (
    <footer>
      <div>
        <img src={LogoFooter} alt=''></img>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer