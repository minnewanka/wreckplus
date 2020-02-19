import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './style.css';

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
    const opts1 = {
      height: '290',
      width: '440',
      playerVars: {
        autoplay: 0,
      },
    };

    return (
      <div className="videos">
        <h1 className="album-section-title">VIDEOS</h1>
        <div className="primary-video">
          <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />
        </div>
        <div className="secondary-videos">
          <YouTube videoId="2g811Eo7K8U" opts={opts1} onReady={this._onReady} />
          <YouTube videoId="2g811Eo7K8U" opts={opts1} onReady={this._onReady} />
        </div>
      </div>
    );
  }
}

export default Videos;
