import React, { Component } from 'react';
import Slider from 'react-slick';
import './style.css';
import AlbumModal from './albumModal/AlbumModal';
import albums from '../../ressources/albums.json';

export default class SimpleSlider extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      albumId: '',
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(albumId) {
    this.setState({ modalIsOpen: true, albumId: albumId });
    this.props.toggleNavbar();
  }

  afterOpenModal() {}

  closeModal() {
    this.setState({ modalIsOpen: false });
    this.props.toggleNavbar();
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    const { modalIsOpen, albumId } = this.state;

    return (
      <div className="albums">
        <h1 className="album-section-title">ALBUM</h1>
        <AlbumModal
          isOpen={modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          closeModal={this.closeModal}
          openModal={this.openModal}
          albumId={albumId}
        />
        <Slider {...settings}>
          {albums.reverse().map(album => (
            <div key={`album-${album.id}`}>
              <img
                className="grow"
                src={album.imageUrl}
                alt="album"
                width="300"
                length="300"
                onClick={() => this.openModal(album.id)}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
