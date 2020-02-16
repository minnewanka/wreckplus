import React from 'react';
import { Consumer } from '../../context';
import Navbar from './Navbar';

const AlbumConsumer = props => {
  return (
    <Consumer>
      {({ showNavbar }) => <Navbar showNavbar={showNavbar} />}
    </Consumer>
  );
};

export default AlbumConsumer;
