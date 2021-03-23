import React from 'react';
import { Col } from 'antd';
import CList from '../components/ComponentList';

function LeftSide() {
  return (
    <Col
      className="LeftSide"
      span={3}
      style={{ height: 700, width: 20, background: '#2e5eee' }}
    >
      {CList.map(item => item)}
    </Col>
  );
}
export default LeftSide;
