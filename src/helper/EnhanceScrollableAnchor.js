import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

const withScrollableAnchor = (WrappedComponent, anchorId) => {
  return class extends React.Component {
    render() {
      return (
        <ScrollableAnchor id={anchorId}>
          <WrappedComponent {...this.props} />
        </ScrollableAnchor>
      );
    }
  };
};

export { withScrollableAnchor };
