import React from 'react';
import './style.css';
import { MENU } from '../../utils/constants';
import logo from '../../images/logo.jpg';
import SocialIcons from '../socialIcons/SocialIcons';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      {MENU.map(item => (
        <div className="section-title">
          <a className="nostyle" href={item}>
            {item.toUpperCase()}
          </a>
        </div>
      ))}
      <SocialIcons />
    </div>
  );
};

export default Navbar;
