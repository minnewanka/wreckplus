import React, { Component } from 'react';
import { Consumer } from '../../context';
import Hero from './Hero';
import { SECTIONS } from '../../utils/constants';
import { withScrollableAnchor } from '../../helper/EnhanceScrollableAnchor';

class HeroConsumer extends Component {
  render() {
    return <Consumer>{({ toggleNavbar }) => <Hero toggleNavbar={toggleNavbar} />}</Consumer>;
  }
}
export default withScrollableAnchor(HeroConsumer, SECTIONS.HOME);
