import React from 'react';
import FComponent from './FComponent';

function CButton({ id, style }) {
  return (
    <div style={{ top: 0, left: 0, ...style }}>
      <FComponent id={id}>Sure</FComponent>
    </div>
  );
}

export default CButton;
