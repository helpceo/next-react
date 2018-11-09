import React, { Component } from 'react';
import { Button } from 'antd';
import './css/style.css';

class App extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <div className="App">
        这是首页
        <Button type="primary">Primary</Button>
      </div>
    );
  }
}

export default App;