import React, { Component } from 'react';
import { Consumer } from '../../context';
import News from './News';
import { SECTIONS } from '../../utils/constants';
import { withScrollableAnchor } from '../../helper/EnhanceScrollableAnchor';

class NewsConsumer extends Component {
  render() {
    return <Consumer>{({ toggleNavbar }) => <News toggleNavbar={toggleNavbar} />}</Consumer>;
  }
}
export default withScrollableAnchor(NewsConsumer, SECTIONS.NEWS);
