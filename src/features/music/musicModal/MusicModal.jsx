import React, { Component } from 'react';
import Modal from 'react-modal';
import albums from '../../../ressources/albums.json';
import './style.css';

export default class AlbumModal extends Component {
  render() {
    const { albumId, isOpen, openModal, afterOpenModal, closeModal } = this.props;
    const album = isOpen ? albums.find(album => album.id === albumId) : {};
    const tracklist = album.tracklist ? album.tracklist : [];
    return (
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="Modal"
      >
        <div className="album-modal">
          <div>
            <img
              className="album-image"
              src={album.imageUrl}
              alt="album"
              width="800"
              length="800"
            />
          </div>
          <div className="album-modal-content">
            <div className="album-modal-title-container">
              <h1>{album.title}</h1>
              <button className="album-modal-close-button" onClick={closeModal}>
                X
              </button>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorem ipsum
                doloremque vel facere sunt consectetur perferendis, dolores eos magnam laudantium
                reprehenderit alias mollitia harum aspernatur. Sed beatae aspernatur inventore?
              </p>
              <h2>Tracklist</h2>
              <ol>
                {tracklist.map(song => (
                  <li>{song}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}
