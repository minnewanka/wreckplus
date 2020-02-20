import React, { Component } from 'react';
import './style.scss';
import Card from '../../components/card/Card';
import Slider from 'react-slick';
import PreviousArrow from '../../components/carrouselArrows/PreviousArrow';
import NextArrow from '../../components/carrouselArrows/NextArrows';

class News extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: <PreviousArrow />,
      nextArrow: <NextArrow />,
    };
    return (
      <div className="news">
        <h1 className="section-title">NEWS</h1>
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
