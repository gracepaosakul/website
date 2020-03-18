import React from 'react';
import './App.css';

import { Button, DatePicker } from 'antd';

function App() {
  return (
    <div className="App">
      <DatePicker />
      <Button type="primary" style={{marginLeft: "1rem"}}>Button</Button>
    </div>
  );
}

export default App;
