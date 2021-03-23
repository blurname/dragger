import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

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
