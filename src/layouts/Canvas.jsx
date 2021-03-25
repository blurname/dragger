import React, { useState } from 'react';
import { Col } from 'antd';
import CList from '../components/ComponentList';
function Canvas() {
  const dropHandler = e => {
    e.preventDefault();
    let addingCmp = e.dataTransfer.getData('add-cmp');
    addingCmp = JSON.parse(addingCmp);
    setCmps(() => {
      const newCmp = CList.filter(x => {
        return x.props.id === addingCmp.id;
      });

      console.log('PastpageY' + e.clientX);
      console.log('NowpageY' + e.pageX);
      const nn = React.cloneElement(newCmp[0], {
        style: {
          position: 'absolute',
          left: e.pageX - 254,
          top: e.pageY - 119 - 20,
        },
      });
      return [...Cmps, nn];
    });
  };
  const dragOverHandler = e => {
    e.preventDefault();
    console.log(e.pageX);
    // console.log(e.pageY);
  };

  const [Cmps, setCmps] = useState([]);
  return (
    <Col span={17}>
      <div
        style={{
          position: 'relative',
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
