import React from 'react';
import { Col } from 'antd';
const dropHandler = (e: React.DragEvent) => {
  e.preventDefault();
  e.stopPropagation();
  let cmp = e.dataTransfer.getData('add-component');
  if (cmp) {
  }
};
function Canvas() {
  return (
    <Col
      className="LeftSide"
      span={17}
      style={{ height: 700, width: 20, background: '#556644' }}
    ></Col>
  );
}
export default Canvas;
