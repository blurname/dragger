import { Row, Col, Button, Divider } from 'antd';
import React, { useState } from 'react';
import './App.css';
import Canvas from './layouts/Canvas';
import LeftSide from './layouts/LeftSide';
import NavTool from './layouts/NavTool';
import RightSide from './layouts/RightSide';

function App() {
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
