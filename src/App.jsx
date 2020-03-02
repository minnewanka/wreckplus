import React from 'react';
import Navbar from './components/navbar';
import Hero from './features/hero';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Music from './features/music';
import News from './features/news';
import Band from './features/band';
import Modal from 'react-modal';
import { Provider } from './context';
import Videos from './features/videos';
import './App.scss';
import Shows from './features/shows';

library.add(fab, faAngleLeft, faAngleRight);
Modal.setAppElement('#root');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavbar: true,
      activeSection: '',
      toggleNavbar: this.toggleNavbar.bind(this),
      setActiveSection: this.setActiveSection.bind(this),
    };
  }

  toggleNavbar() {
    this.setState({ showNavbar: !this.state.showNavbar });
  }

  setActiveSection(sectionId) {
    this.setState({ activeSection: sectionId });
  }

  render() {
    return (
      <div className="App">
        <Provider value={this.state}>
          <Navbar />
          <Hero />
          <News />
          <Band />
          <div className="parallax2"></div>
          <Music />
          <div className="parallax1" />
          <Videos />
          <Shows />
        </Provider>
      </div>
    );
  }
}

export default App;
