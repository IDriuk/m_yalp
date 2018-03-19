import React, { Component } from 'react';
import './Search.css';

import Modal from '../Modal/Modal';

import logo from '../assets/logo/default.png';
import MobileIcon from '../assets/18/mobile';
import SearchIcon from '../assets/24/search';
import SearchIconSmall from '../assets/18/search_small';
import Close from '../assets/18/close';
import Marker from '../assets/18/marker';
import HamburgerIcon from '../assets/24/hamburger';

class Search extends Component {
  render() {
    return (
      <div className="search-bar webview-hidden collapsed" >
        <div className="cta-menubar-pitch_container menu-bar-pitch_container" >

          <div className="yelp-logo-container">
            <a className="logo-icon logo page-link">
              <img src={logo} height="28" alt="yelp-logo" />
            </a>
          </div>

          <div className="cta-menubar-pitch-icons">

            <div className="cta-menubar-pitch_left-icons u-pull-left">
              <div className="menu-bar-pitch_open-in-app">
                <div className="button-content">
                  <span
                    className="icon icon--18-mobile icon--size-18 icon--white icon--fallback-inverted"
                    style={{width: "18px", height: "18px"}}>
                      <MobileIcon />
                    </span>
                  Open in App
                </div>
              </div>
            </div>

            <div className="menu-bar-pitch_menu-icons cta-menubar-pitch_right-icons u-pull-right">
              <div className="menu-bar-pitch_menu-item">
                <span
                  className="icon icon--24-search icon--size-24 icon--white icon--fallback-inverted"
                  style={{width: "24px", height: "24px"}}
                >
                  <SearchIcon />

                  <Modal className="flex-container searchbar-modal minimal-header cta-menubar-pitch-modal" >
                    <div className="page-shim"></div>
                    <form className="search-form">
                      <div className="flex-container masthead">
                        <div className="flex-box form-inputs">
                          <div className="fake-input flex-container">
                            <span className="icon icon--size-18 search-icon" style={{width: "18px", height: "18px"}}>
                              <SearchIconSmall />
                            </span>
                            <div className="flex-box input-holder">
                              <input className="find-desc input input-reset" placeholder="e.g. tacos, Mel's" />
                            </div>
                            <span className="icon icon--gray-regular cancel" style={{width: "18px", height: "18px", display: "inline"}}>
                              <Close />
                            </span>
                          </div>
                          <div className="fake-input flex-container input-with-icon">
                            <span className="icon icon--size-18 icon--gray-regular location-icon" style={{width: "18px", height: "18px", display: "block"}}>
                              <Marker />
                            </span>
                            <div className="flex-box input-holder">
                              <input className="find-loc input input-reset" defaultValue="Kuala Lumpur" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </Modal>

                </span>
              </div>
              <div className="menu-bar-pitch_menu-item">
                <span
                  className="icon icon--24-hamburger icon--size-24 icon--white icon--fallback-inverted"
                  style={{width: "24px", height: "24px"}}
                >
                  <HamburgerIcon />
                </span>
              </div>
              <button className="button-text u-hidden">
                <p className="search-text"> Search </p>
              </button>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Search;
