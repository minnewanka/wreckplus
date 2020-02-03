import React from 'react';
import logowp from '../../images/logo-wp.png';
import './style.css';

const Hero = () => {
  return (
    <div className="container hero">
      <div>
        <img src={logowp} alt="Logo" />
      </div>
      ROARING LIKE AN OLD PETROL INJECTION COUPÉ. A stray cat wandering in the
      dead of the night. Instincts that were once deeply buried are coming back.
      Flirting with danger. Feeling free... This isn't exactly your regular
      wildlife documentary. It’s Heavy Metal. Wreck Plus is back for some high
      speed, heavy and greasy rocking on a new single titled "Roars in the Dead
      of Night". This is an annunciation a full opus predicted for the year two
      thousand nineteen.
    </div>
  );
};

export default Hero;
