import { Button } from 'antd';
import React, { DragEventHandler, ReactNode } from 'react';
const dragStartHandler = e => {
  let pageX = e.pageX;
  let pageY = 0;
  let id = e.target.id;
  console.log(e.clientY);
  // console.log(JSON.stringify({ pageX, pageY, type }));
  e.dataTransfer.setData('add-cmp', JSON.stringify({ pageX, pageY, id }));
  console.log('fromGetData' + e.dataTransfer.getData('add-cmp'));
  e.dataTransfer.effectAllowed = 'copy';
};
const dragHandler = e => {
  e.preventDefault();
  console.log(e.pageY);
};
function FComponent({ id, children, style }) {
  return (
    <Button
      style={{ margin: 10, width: 70, ...style }}
      draggable="true"
      id={id}
      // onDrag={dragHandler}
      onDragStart={dragStartHandler}
    >
      {children}
    </Button>
  );
}

export default FComponent;
