import React, { Component } from 'react';
import { Consumer } from '../../context';
import Band from './Band';
import { SECTIONS } from '../../utils/constants';
import { withScrollableAnchor } from '../../helper/EnhanceScrollableAnchor';

class BandConsumer extends Component {
  render() {
    return <Consumer>{({ toggleNavbar }) => <Band toggleNavbar={toggleNavbar} />}</Consumer>;
  }
}
export default withScrollableAnchor(BandConsumer, SECTIONS.BAND);
