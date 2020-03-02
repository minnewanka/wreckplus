import React from 'react';
import YouTube from 'react-youtube';
import './style.scss';
import socialNetworks from '../../ressources/socialNetworks.json';
import { SECTIONS } from '../../utils/constants';

const Videos = () => {
  return (
    <section id={SECTIONS.VIDEO} className="videos">
      <h1 className="section-title">VIDEOS</h1>
      <iframe
        className="primary-video"
        style={{
          width: '70%',
          height: '70%',
        }}
        src={`https://www.youtube.com/embed/RQL8a1sNfRE`}
        frameBorder="0"
      />
      <div className="more-videos">
        <a
          className="more-videos-button"
          href={socialNetworks.find(item => item.name === 'youtube').url}
          target="_blank"
        >
          MORE VIDEOS
        </a>
      </div>
    </section>
  );
};

export default Videos;
