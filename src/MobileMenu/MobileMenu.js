import React, { Component } from 'react';
import './MobileMenu.css';

import signup_mobile from '../assets/signup_mobile.png';

import NearbyIcon from '../assets/24/nearby_outline';
import BookmarkIcon from '../assets/24/bookmark_outline';
import BurstIcon from '../assets/24/yelp';

class MobileMenu extends Component {

  render() {
    return (
      <div
        className="mobile-menu mobile-menu-show-input"
        style={{top: "44px", marginTop: "0px"}}
      >
        <div className="mobile-menu_welcome-section">
          <img
            className="mobile-menu_welcome-image"
            src={signup_mobile}
            alt="signup mobile"
          />
          <p className="mobile-menu_welcome-text">Sign in today to share photos, add tips, and bookmark your favorite businesses on Yelp.</p>
          <div className="flex-container">
            <div className="inline-layout-content">
              <a className="ybtn ybtn--full login-link page-link">
                Log In
              </a>
            </div>
            <div className="inline-layout-content">
              <a className="ybtn ybtn--primary ybtn--full page-link">
                Sign Up
              </a>
            </div>
          </div>
        </div>
        <ul className="action-list action-list-menu">
          <li className="action-item">
            <a className="page-link action flex-container flex-center">
              <span className="icon flex-avatar" style={{width: "24px", height: "24px"}}>
                <NearbyIcon />
              </span>
              <div className="flex-box">Nearby</div>
            </a>
          </li>
          <li className="action-item">
            <a className="page-link action flex-container flex-center">
              <span className="icon flex-avatar" style={{width: "24px", height: "24px"}}>
                <BookmarkIcon />
              </span>
              <div className="flex-box">Bookmarks</div>
            </a>
          </li>
        </ul>
        <div className="mobile-menu_footer text-centered">
          <a className="mobile-menu_footer-link">Ad Choices</a>
          <a className="mobile-menu_footer-link">Support</a>
          <div className="mobile-menu_footer-burst">
            <span
              className="icon icon--gray-regular"
              style={{width: "24px", height: "24px"}}
            >
              <BurstIcon />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileMenu;
