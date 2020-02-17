import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Hero from './features/hero';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Album from './features/albums';
import './App.css';
import News from './features/news';
import Modal from 'react-modal';
import { Provider } from './context';

library.add(fab, faAngleLeft, faAngleRight);
Modal.setAppElement('#root');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavbar: true,
      toggleNavbar: this.toggleNavbar.bind(this),
    };
  }

  toggleNavbar() {
    this.setState({ showNavbar: !this.state.showNavbar });
  }

  render() {
    return (
      <div className="App">
        <Provider value={this.state}>
          <Navbar />
          <Hero />
          <News />
          <div className="parallax2"></div>
          <Album />
          <div className="parallax1" />
        </Provider>
      </div>
    );
  }
}

export default App;
