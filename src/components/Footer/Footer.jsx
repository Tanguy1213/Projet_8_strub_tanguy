import React from 'react';
import LogoFooter from '../../assets/Logo_footer.svg';
import './footer.scss';

function Footer({children}) {
  return (
    <footer>
      <div>
      {children}
        <img src={LogoFooter} alt=''></img>
        <p>© 2020 Kasa. All rights reserved</p>
        
      </div>
    </footer>
  )
}

export default Footer