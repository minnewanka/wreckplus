import React, { Component } from 'react';
import './style.css';
import Card from '../../components/card/Card';
import Slider from 'react-slick';

class News extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div className="news">
        <h1 className="news-section-title">NEWS</h1>
        <Slider {...settings}>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </Slider>
      </div>
    );
  }
}

export default News;