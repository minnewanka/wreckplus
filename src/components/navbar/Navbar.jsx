import React, { useEffect } from 'react';
import './style.scss';
import { MENU } from '../../utils/constants';
import logo from '../../images/logo.jpg';
import SocialIcons from '../socialIcons/SocialIcons';

const Navbar = props => {
  const { showNavbar, activeSection, setActiveSection } = props;
  useEffect(() => {
    var navbar = document.querySelector('#navbar');

    window.onscroll = function() {
      // pageYOffset or scrollY

      if (showNavbar) {
        if (window.pageYOffset > 300) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };
  });

  return (
    showNavbar && (
      <div id="navbar" className="navbar sticky">
        <img src={logo} alt="Logo" />
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
