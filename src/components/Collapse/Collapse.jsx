import React, { useState } from 'react';
import arrowIcon from '../../assets/arrow.svg';
import './collapse.scss';

function Collapse({ children, buttonText }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse-container ${isOpen ? 'open' : 'closed'}`}>
      <button className="collapse-button" onClick={handleToggle}>
        <span className="button-text">{buttonText}</span>
        <img
          src={arrowIcon}
          alt={isOpen ? 'Flèche vers le bas' : 'Flèche vers le haut'}
          className={`arrow-icon ${isOpen ? 'open' : ''}`}
        />
      </button>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
          {children}
      </div>
    </div>
  );
}

export default Collapse;