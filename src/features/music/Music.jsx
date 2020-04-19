import React, { useState } from 'react';
import Slider from 'react-slick';
import './style.scss';
import MusicModal from './musicModal/MusicModal';
import albums from '../../ressources/albums.json';
import PreviousArrow from '../../components/carrouselArrows/PreviousArrow';
import NextArrow from '../../components/carrouselArrows/NextArrows';
import { SECTIONS } from '../../utils/constants';

const Music = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [albumId, setAlbumId] = useState('');

  const openModal = albumId => {
    setModalIsOpen(true);
    setAlbumId(albumId);
  };

  const afterOpenModal = () => {};

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section id={SECTIONS.MUSIC} className="music">
      <h1 className="section-title">MUSIC</h1>
      <MusicModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        closeModal={closeModal}
        openModal={openModal}
        albumId={albumId}
      />
      <div className="music-albums">
        {albums.reverse().map(album => (
          <div className="music-albums-item" key={`album-${album.id}`}>
            <img
              className="music-albums-image"
              src={album.imageUrl}
              alt="album"
              onClick={() => openModal(album.id)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Music;
