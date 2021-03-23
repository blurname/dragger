import React, { useState } from 'react';
import './App.css';
import NavTool from './layouts/NavTool';
import { Divider, Row } from 'antd';
import LeftSide from './layouts/LeftSide';
import Canvas from './layouts/Canvas';
import RightSide from './layouts/RightSide';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavTool></NavTool>
      <Divider></Divider>
      <Row>
        <LeftSide></LeftSide>
        <Divider type="vertical"></Divider>
        <Canvas></Canvas>
        <Divider type="vertical"></Divider>
        <RightSide></RightSide>
      </Row>
    </div>
  );
}

export default App;
