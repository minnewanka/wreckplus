import React, { Component } from 'react';
import Videos from './Videos';
import { SECTIONS } from '../../utils/constants';
import { withScrollableAnchor } from '../../helper/EnhanceScrollableAnchor';

class VideosConsumer extends Component {
  render() {
    return <Videos />;
  }
}
export default withScrollableAnchor(VideosConsumer, SECTIONS.VIDEO);
