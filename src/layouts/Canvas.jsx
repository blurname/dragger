import React, { useState } from 'react';
import { Col } from 'antd';
import CList from '../components/ComponentList';
function Canvas() {
  const dropHandler = e => {
    e.preventDefault();
    e.stopPropagation();
    let addingCmp = e.dataTransfer.getData('add-component');
    addingCmp = JSON.parse(addingCmp);
    setCmps([
      () => {
        newCmp = CList.filter(x => {
          x.type == type;
        });
        return [...Cmps, newCmp];
      },
    ]);
  };
  const dragOverHandler = e => {
    e.preventDefault();
  };

  const [Cmps, setCmps] = useState([]);
  return (
    <Col
      className=""
      span={17}
      style={{ height: 700, width: 20, background: '#556644' }}
    >
      <div onDrop={dropHandler} onDragOver={dragOverHandler}></div>
    </Col>
  );
}
export default Canvas;
