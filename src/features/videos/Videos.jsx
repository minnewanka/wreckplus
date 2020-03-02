import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './style.scss';
import socialNetworks from '../../ressources/socialNetworks.json';

class Videos extends Component {
  _onReady(event) {
    event.target.pauseVideo();
  }
  render() {
    const opts = {
      playerVars: {
        autoplay: 0,
      },
    };

    return (
      // <div className="videos">
      //   <h1 className="section-title">VIDEOS</h1>
      //   <YouTube videoId="RQL8a1sNfRE" opts={opts} onReady={this._onReady} />
      // </div>
      <div className="videos">
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
      </div>
    );
  }
}

export default Videos;
