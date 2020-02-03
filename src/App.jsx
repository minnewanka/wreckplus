import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './features/hero/Hero';
import Band from './features/band/Band';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Album from './features/albums/Albums';

library.add(fab);

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Band />
      <Album />
    </div>
  );
}

export default App;
