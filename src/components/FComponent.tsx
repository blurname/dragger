import { Button } from 'antd';
import React, { DragEventHandler, ReactNode } from 'react';
const dragHandler = (e: React.DragEvent) => {
  let pageX = e.pageX;
  let pageY = e.pageY;
  e.dataTransfer?.setData('add-component', JSON.stringify({ pageX, pageY }));
};
function FComponent({ children }: any) {
  return (
    <Button
      style={{ margin: 10, width: 70 }}
      draggable="true"
      onDrag={dragHandler}
    >
      {children}
    </Button>
  );
}

export default FComponent;
