import React, { Component } from 'react';
import './App.css';

import Search from '../Search/Search';

class App extends Component {
  render() {
    return (
      <div
        id="wrap"
        className="flex-container-column"
        style={{minHeight: "452px"}}
      >
        <Search />
      </div>
    );
  }
}

export default App;
