import React, { Component } from 'react';
import { Consumer } from '../../context';
import Music from './Music';
import { SECTIONS } from '../../utils/constants';
import { withScrollableAnchor } from '../../helper/EnhanceScrollableAnchor';
// import { withModal } from '../../helper/EnhanceModal';

class MusicConsumer extends Component {
  render() {
    return (
      <Consumer>
        {({ toggleNavbar }) => <Music toggleNavbar={toggleNavbar} {...this.props} />}
      </Consumer>
    );
  }
}

export default withScrollableAnchor(MusicConsumer, SECTIONS.MUSIC);
