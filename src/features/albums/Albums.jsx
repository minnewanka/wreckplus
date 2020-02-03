import React, { Component } from 'react';
import Slider from 'react-slick';
import './style.css';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div className="albums">
        <h1 className="album-section-title">ALBUM</h1>
        <Slider {...settings}>
          {[
            {
              url:
                'http://wreckplus.com/wp-content/uploads/2018/04/Roars-pochette-internet.jpg',
            },
            {
              url:
                'http://wreckplus.com/wp-content/uploads/2014/02/a1950255279_16.jpg',
            },
            {
              url:
                'http://wreckplus.com/wp-content/uploads/2014/03/riding-720.jpg',
            },
            {
              url:
                'http://wreckplus.com/wp-content/uploads/2016/04/pochette-starcrossed-768x768.jpg',
            },
            {
              url:
                'http://wreckplus.com/wp-content/uploads/2014/02/a0480852077_10.jpg',
            },
          ].map(image => (
            <div>
              <img src={image.url} alt="album" width="300" length="300" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
