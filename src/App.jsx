import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './features/hero/Hero';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Album from './features/albums/Albums';
import './App.css';
import News from './features/news/News';
import ScrollableAnchor from 'react-scrollable-anchor';
import { SECTIONS } from './utils/constants';

library.add(fab);

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollableAnchor id={'home'}>
        <Hero />
      </ScrollableAnchor>
      <ScrollableAnchor id={'news'}>
        <News />
      </ScrollableAnchor>

      <div className="parallax2"></div>
      <ScrollableAnchor id={SECTIONS.ALBUM}>
        <Album />
      </ScrollableAnchor>

      <div className="parallax1" />
    </div>
  );
}

export default App;
