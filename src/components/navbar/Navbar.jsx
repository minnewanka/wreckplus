import React, { useEffect, useRef } from 'react';
import './style.scss';
import { MENU } from '../../utils/constants';
import logo from '../../images/logo.jpg';
import SocialIcons from '../socialIcons/SocialIcons';
import Scrollspy from 'react-scrollspy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = props => {
  const navbarRef = useRef(null);
  const socialIconsRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    window.onscroll = function() {
      if (window.pageYOffset > 300) {
        navbarRef.current.classList.add('scrolled');
        logoRef.current.classList.add('navbar-hidden');
        socialIconsRef.current.classList.add('navbar-hidden');
      } else {
        navbarRef.current.classList.remove('scrolled');
        logoRef.current.classList.remove('navbar-hidden');
        socialIconsRef.current.classList.remove('navbar-hidden');
      }
    };
  });

  return (
    <div ref={navbarRef} className="navbar sticky">
      <img ref={logoRef} className="navbar-logo" src={logo} alt="Logo" />

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
      <div className="navbar-responsive-menu">
        <FontAwesomeIcon icon={'bars'} color="#b5b5b5" size="3x" />
      </div>
      <div className="navbar-social-icon" ref={socialIconsRef}>
        <SocialIcons />
      </div>
    </div>
  );
};

export default Navbar;
