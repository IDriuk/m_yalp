import React, { Component } from 'react';
import './App.css';

import Search from '../Search/Search';
import Nearby from '../Nearby/Nearby';
import Pitch from '../Pitch/Pitch';
import Businesses from '../Businesses/Businesses';

class App extends Component {
  render() {
    return (
      <div
        id="wrap"
        className="flex-container-column"
        style={{minHeight: "452px"}}
      >
        <Search />

        <div className="page-content flex-box home no-top-space">
          <Nearby />
          <Pitch />
          <Businesses />
        </div>
      </div>
    );
  }
}

export default App;