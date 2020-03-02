import React from 'react';
import './style.scss';
import shows from '../../ressources/shows.json';
import { SECTIONS } from '../../utils/constants';

const Shows = () => {
  return (
    <section id={SECTIONS.SHOWS} className="shows container">
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
    </section>
  );
};

export default Shows;
