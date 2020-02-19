import React from 'react';
import { Consumer } from '../../context';
import Navbar from './Navbar';

const AlbumConsumer = props => {
  return (
    <Consumer>
      {({ activeSection, showNavbar, setActiveSection }) => (
        <Navbar
          activeSection={activeSection}
          showNavbar={showNavbar}
          setActiveSection={setActiveSection}
        />
      )}
    </Consumer>
  );
};

export default AlbumConsumer;
