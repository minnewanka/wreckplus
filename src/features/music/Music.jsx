import React, { Component } from 'react';
import Slider from 'react-slick';
import './style.scss';
import MusicModal from './musicModal/MusicModal';
import albums from '../../ressources/albums.json';
import PreviousArrow from '../../components/carrouselArrows/PreviousArrow';
import NextArrow from '../../components/carrouselArrows/NextArrows';

export default class Music extends Component {
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
    const { modalIsOpen, albumId } = this.state;

    return (
      <div className="music">
        <h1 className="section-title">MUSIC</h1>
        <MusicModal
          isOpen={modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          closeModal={this.closeModal}
          openModal={this.openModal}
          albumId={albumId}
        />
        <div className="music-albums">
          {albums.reverse().map(album => (
            <div className="music-albums-item" key={`album-${album.id}`}>
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
        </div>
      </div>
    );
  }
}
