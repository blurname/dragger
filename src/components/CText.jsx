import React from 'react';
import FComponent from './FComponent';

function CText({ id, style }) {
  return (
    <div style={{ top: 0, left: 0, ...style }}>
      <FComponent id={id}>text</FComponent>
    </div>
  );
}

export default CText;
