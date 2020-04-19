import React from 'react';
import Navbar from './components/navbar/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAngleLeft, faAngleRight, faBars } from '@fortawesome/free-solid-svg-icons';
import Hero from './features/hero/Hero';
import Music from './features/music/Music';
import News from './features/news/News';
import Band from './features/band/Band';
import Videos from './features/videos/Videos';
import Modal from 'react-modal';
import { Provider } from './context';
import './App.scss';
import Shows from './features/shows/Shows';
library.add(fab, faAngleLeft, faAngleRight, faBars);
Modal.setAppElement('#root');

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <News />
      <Band />
      <div className="parallax2"></div>
      <Music />
      <div className="parallax1" />
      <Videos />
      <Shows />
    </div>
  );
};

export default App;
