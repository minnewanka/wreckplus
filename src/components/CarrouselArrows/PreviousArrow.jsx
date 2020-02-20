import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PreviousArrow = props => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={'angle-left'} color="#000" size="3x" />
    </div>
  );
};

export default PreviousArrow;
