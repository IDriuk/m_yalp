import React, { Component } from 'react';
import './Businesses.css';

import marugame from '../assets/60s/marugame.jpg';
import botellon from '../assets/60s/botellon.jpg';
import club from '../assets/60s/club.jpg';

const actionItems = [
  { name: "MARUGAME UDON", src: marugame, address: "3251 20th Ave, San Francisco", reviewsCount: 378, rating: "4" },
  { name: "Botellón", src: botellon, address: "2200 Market St, San Francisco", reviewsCount: 51, rating: "4-half" },
  { name: "Fillmore Social Club", src: club, address: "1521 Eddy St, San Francisco", reviewsCount: 64, rating: "4-half" }
];

class Businesses extends Component {

  renderItem(item) {
    const { name, src, address, rating, reviewsCount } = item;
    return (
      <li key={name} className="action-item">
        <div className="action flex-container page-link">
          <div className="flex-avatar">
            <div className="photo-box pb-60s">
              <a>
                <img
                  className="photo-box-img"
                  alt="MARUGAME UDON"
                  width="60"
                  height="60"
                  src={src}
                />
              </a>
            </div>
          </div>
          <div className="flex-box">
            <h4 className="alternate u-space-b0">
              <a className="h-link">{name}</a>
            </h4>
            <div className="biz-rating biz-rating-large clearfix">
              <div className={`i-stars i-stars--regular-${rating} rating-large`}></div>
              <span className="review-count rating-qualifier">{reviewsCount} reviews</span>
            </div>
            <small>
              <address>{address}</address>
            </small>
          </div>
        </div>
      </li>
    );
  }

  render() {
    return (
      <section className="new-businesses section-full">
        <h2 className="section-title">Hot New Businesses Nearby</h2>
        <ul className="action-list openings-list">
          {actionItems.map(this.renderItem)}
        </ul>
        <div className="section-button">
          <button className="ybtn ybtn--full" type="submit" value="submit">
            View More New Businesses
          </button>
        </div>
      </section>
    );
  }
}

export default Businesses;
