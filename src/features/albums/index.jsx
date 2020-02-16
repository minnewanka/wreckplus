import React, { Component } from 'react';
import { Consumer } from '../../context';
import Albums from './Albums';
import { SECTIONS } from '../../utils/constants';
import { withScrollableAnchor } from '../../helper/EnhanceScrollableAnchor';

class HeroConsumer extends Component {
  render() {
    return <Consumer>{({ toggleNavbar }) => <Albums toggleNavbar={toggleNavbar} />}</Consumer>;
  }
}

export default withScrollableAnchor(HeroConsumer, SECTIONS.ALBUM);
