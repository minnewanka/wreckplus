import React, { useEffect } from 'react';
import './style.scss';
import { MENU } from '../../utils/constants';
import logo from '../../images/logo.jpg';
import SocialIcons from '../socialIcons/SocialIcons';
import Scrollspy from 'react-scrollspy';

const Navbar = props => {
  const { showNavbar, activeSection, setActiveSection } = props;
  useEffect(() => {
    var navbar = document.querySelector('#navbar');
    var logo = document.querySelector('#logo');
    var socialIcons = document.querySelector('#socialIcons');

    window.onscroll = function() {
      if (window.pageYOffset > 300) {
        showNavbar && navbar.classList.add('scrolled');
        logo && logo.classList.add('navbar-hidden');
        socialIcons && socialIcons.classList.add('navbar-hidden');
      } else {
        showNavbar && navbar.classList.remove('scrolled');
        logo && logo.classList.remove('navbar-hidden');
        socialIcons && socialIcons.classList.remove('navbar-hidden');
      }
    };
  });

  return (
    showNavbar && (
      <div id="navbar" className="navbar sticky">
        <img id="logo" src={logo} alt="Logo" />
        {MENU.map(item => (
          <div
            key={`navbar-${item}`}
            className={`navbar-section-title ${
              item === activeSection ? 'navbar-active-section' : ''
            }`}
          >
            <a className="nostyle" href={`#${item}`} onClick={() => setActiveSection(item)}>
              {item.toUpperCase()}
            </a>
          </div>
        ))}
        <SocialIcons />
      </div>
    )
  );
};

export default Navbar;
