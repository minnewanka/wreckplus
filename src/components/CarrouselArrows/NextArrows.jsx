import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NextArrow = props => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={'angle-right'} color="#b5b5b5" size="3x" />
    </div>
  );
};

export default NextArrow;
