import React, { Component } from 'react';
import './App.css';

import Search from '../Search/Search';
import Nearby from '../Nearby/Nearby';
import Pitch from '../Pitch/Pitch';
import Businesses from '../Businesses/Businesses';
import Footer from '../Footer/Footer';
import MobileMenu from '../MobileMenu/MobileMenu';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { mobileMenu: false}
  }

  render() {
    const { mobileMenu } = this.state;

    return (
      <div
        id="wrap"
        className="flex-container-column"
        style={{minHeight: "452px"}}
      >

        <Search
          showMobileMenu={() => this.setState({mobileMenu: true})}
          hideMobileMenu={() => this.setState({mobileMenu: false})}
        />

        {!mobileMenu &&
        <div className="page-content flex-box home no-top-space">
          <Nearby />
          <Pitch />
          <Businesses />
        </div>}

        {!mobileMenu && <Footer />}

        {mobileMenu && <MobileMenu />}

      </div>
    );
  }
}

export default App;
