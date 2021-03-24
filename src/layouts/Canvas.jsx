import React, { useState } from 'react';
import { Col } from 'antd';
import CList from '../components/ComponentList';
function Canvas() {
  const dropHandler = e => {
    e.preventDefault();
    let addingCmp = e.dataTransfer.getData('add-cmp');
    addingCmp = JSON.parse(addingCmp);
    setCmps(() => {
      console.log('hellow');
      const newCmp = CList.filter(x => {
        return x.props.id === addingCmp.type;
      });
      console.log(newCmp[0]);
      const nn = React.cloneElement(newCmp[0], {
        style: {
          position: 'absolute',
          left: e.pageX,
          top: e.pageY,
        },
      });
      console.log(nn);
      return [...Cmps, nn];
    });
  };
  const dragOverHandler = e => {
    e.preventDefault();
  };

  const [Cmps, setCmps] = useState([]);
  return (
    <Col span={17}>
      <div
        className=""
        style={{
          position: 'absolute',
          height: 700,
          width: 1350,
          background: '#556644',
        }}
        onDrop={dropHandler}
        onDragOver={dragOverHandler}
      >
        {Cmps.map(item => item)}
      </div>
    </Col>
  );
}
export default Canvas;
