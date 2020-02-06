import React, { useEffect } from 'react';
import './style.css';
import { MENU } from '../../utils/constants';
import logo from '../../images/logo.jpg';
import SocialIcons from '../socialIcons/SocialIcons';

const Navbar = () => {
  useEffect(() => {
    var navbar = document.querySelector('#navbar');

    window.onscroll = function() {
      // pageYOffset or scrollY
      if (window.pageYOffset > 300) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
  });

  return (
    <div id="navbar" className="navbar sticky">
      <img src={logo} alt="Logo" />
      {MENU.map(item => (
        <div className="section-title">
          <a className="nostyle" href={`#${item}`}>
            {item.toUpperCase()}
          </a>
        </div>
      ))}
      <SocialIcons />
    </div>
  );
};

export default Navbar;
