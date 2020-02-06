import React, { Component } from 'react';
import logowp from '../../images/logo-wp.png';
import './style.css';
import { render } from '@testing-library/react';

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-image">
          <img src={logowp} alt="Logo" />
        </div>
        <div className="container hero-text">
          ROARING LIKE AN OLD PETROL INJECTION COUPÉ. A stray cat wandering in
          the dead of the night. Instincts that were once deeply buried are
          coming back. Flirting with danger. Feeling free... This isn't exactly
          your regular wildlife documentary. It’s Heavy Metal. Wreck Plus is
          back for some high speed, heavy and greasy rocking on a new single
          titled "Roars in the Dead of Night". This is an annunciation a full
          opus predicted for the year two thousand nineteen.
        </div>
      </div>
    );
  }
}

export default Hero;
