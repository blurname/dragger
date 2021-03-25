import React from 'react';
import { Col } from 'antd';
import CList from '../components/ComponentList';

function LeftSide() {
  const dragOverHandler = e => {
    e.preventDefault();
    console.log(e.pageY);
  };
  return (
    <Col
      className="LeftSide"
      span={3}
      style={{
        position: 'relative',
        height: 700,
        width: 20,
        background: '#2e5eee',
      }}
      // onDragOver={dragOverHandler}
    >
      {CList.map(item => item)}
    </Col>
  );
}
export default LeftSide;
