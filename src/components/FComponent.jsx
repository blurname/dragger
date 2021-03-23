import { Button } from 'antd';
import React, { DragEventHandler, ReactNode } from 'react';
const dragHandler = e => {
  let pageX = e.pageX;
  let pageY = e.pageY;
  let type = e.target.id;
  e.dataTransfer?.setData(
    'add-component',
    JSON.stringify({ pageX, pageY, type }),
  );
};
function FComponent({ children, style, id }) {
  return (
    <Button
      style={{ ...style, margin: 10, width: 70 }}
      draggable="true"
      onDrag={dragHandler}
      id={id}
    >
      {children}
    </Button>
  );
}

export default FComponent;
