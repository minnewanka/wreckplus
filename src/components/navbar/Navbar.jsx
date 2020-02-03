import React from 'react';
import './style.css';
import { MENU } from '../../utils/constants';
import logo from '../../images/logo.jpg';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      {MENU.map(item => (
        <div className="section">
          <a className="nostyle" href={item}>
            {item.toUpperCase()}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
