import React, { Component } from 'react';
import logowp from '../../images/logo-wp.png';
import './style.scss';
import { SECTIONS } from '../../utils/constants';

class Hero extends Component {
  render() {
    return (
      <section id={SECTIONS.HOME} className="hero">
        <div className="hero-image-container">
          <img className="hero-image" src={logowp} alt="Logo" />
        </div>
        <div className="container hero-text"></div>
      </section>
    );
  }
}

export default Hero;
