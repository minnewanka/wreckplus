import React, { Component } from 'react';
import './style.scss';
import shows from '../../ressources/shows.json';

class Shows extends Component {
  render() {
    return (
      <div className="shows container">
        <h1 className="section-title">SHOWS</h1>
        <div className="shows-table">
          {shows.map(show => (
            <div className="shows-row">
              <div className="show-date">{show.date}</div>
              <div className="show-venue">{show.venue}</div>
              <div className="show-city">{show.city}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Shows;
