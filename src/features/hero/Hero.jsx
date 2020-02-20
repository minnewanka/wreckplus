import React, { Component } from 'react';
import logowp from '../../images/logo-wp.png';
import './style.scss';

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-image">
          <img src={logowp} alt="Logo" />
        </div>
        <div className="container hero-text"></div>
      </div>
    );
  }
}

export default Hero;
