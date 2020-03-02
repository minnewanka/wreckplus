import React, { useEffect } from 'react';
import './style.scss';
import { MENU } from '../../utils/constants';
import logo from '../../images/logo.jpg';
import SocialIcons from '../socialIcons/SocialIcons';
import Scrollspy from 'react-scrollspy';

const Navbar = props => {
  useEffect(() => {
    var navbar = document.querySelector('#navbar');
    var logo = document.querySelector('#logo');
    var socialIcons = document.querySelector('#socialIcons');

    window.onscroll = function() {
      if (window.pageYOffset > 300) {
        navbar && navbar.classList.add('scrolled');
        logo && logo.classList.add('navbar-hidden');
        socialIcons && socialIcons.classList.add('navbar-hidden');
      } else {
        navbar && navbar.classList.remove('scrolled');
        logo && logo.classList.remove('navbar-hidden');
        socialIcons && socialIcons.classList.remove('navbar-hidden');
      }
    };
  });

  return (
    <div id="navbar" className="navbar sticky">
      <img id="logo" className="navbar-logo" src={logo} alt="Logo" />
      <Scrollspy
        items={MENU}
        className="navbar-scroll-spy"
        componentTag="div"
        currentClassName="activeItem"
      >
        {MENU.map(item => (
          <div className="navbar-section-title">
            <a className="nostyle" href={`#${item}`}>
              {item.toUpperCase()}
            </a>
          </div>
        ))}
      </Scrollspy>
      <SocialIcons className="navbar-social-icon" />
    </div>
  );
};

export default Navbar;
