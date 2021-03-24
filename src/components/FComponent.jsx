import { Button } from 'antd';
import React, { DragEventHandler, ReactNode } from 'react';
const dragStartHandler = e => {
  let pageX = e.pageX;
  let pageY = e.pageY;
  let type = e.target.id;
  // console.log(JSON.stringify({ pageX, pageY, type }));
  e.dataTransfer.setData('add-cmp', JSON.stringify({ pageX, pageY, type }));
  console.log('fromGetData' + e.dataTransfer.getData('add-cmp'));
  e.dataTransfer.effectAllowed = 'copy';
};
function FComponent({ children, style, id }) {
  return (
    <Button
      style={{ ...style, margin: 10, width: 70 }}
      draggable="true"
      onDragStart={dragStartHandler}
      id={id}
    >
      {children}
    </Button>
  );
}

export default FComponent;
