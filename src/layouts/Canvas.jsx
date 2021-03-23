import React, { useState } from 'react';
import { Col } from 'antd';
function Canvas() {
  const dropHandler = e => {
    e.preventDefault();
    e.stopPropagation();
    let cmp = e.dataTransfer.getData('add-component');
    if (cmp) {
      setCmps(() => {
        return Cmps.concat(cmp);
      });
    }
  };
  const [Cmps, setCmps] = useState([]);
  return (
    <Col
      className="LeftSide"
      span={17}
      style={{ height: 700, width: 20, background: '#556644' }}
    >
      <div onDrop={dropHandler}></div>
    </Col>
  );
}
export default Canvas;
