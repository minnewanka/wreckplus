import React, { Component } from 'react';
import Shows from './Shows';
import { SECTIONS } from '../../utils/constants';
import { withScrollableAnchor } from '../../helper/EnhanceScrollableAnchor';

class ShowsConsumer extends Component {
  render() {
    return <Shows />;
  }
}
export default withScrollableAnchor(ShowsConsumer, SECTIONS.SHOWS);
