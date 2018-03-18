import React, { Component } from 'react';
import './Footer.css';

import TriangleDown from '../assets/14/triangle_down';

import logo from  '../assets/logo/logo_xsmall.png';
import burst from '../assets/logo/burst_xsmall.png';

class Footer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showLanguage: false,
      showCountry: false
    }
  }

  render() {
    const { showLanguage, showCountry } = this.state;

    return (
      <div className="site-footer" >
        <div className="main-content-wrap main-content-wrap--separated">
          <div className="content-container">
            <div className="main-footer webview-hidden">
              <div className="main-footer_section main-footer_menu arrange arrange--equal arrange--30 arrange--stack-small u-sm-space-b0" >
                <div className="main-footer_item arrange_unit">
                  <div className="footer-menu languages-menu">

                    <div className="footer-menu_section footer-language">
                      <h3 className="footer-menu_header responsive-hidden-small">Languages</h3>
                      <div>
                        <div
                          onClick={() => this.setState({ showLanguage: !showLanguage, showCountry: false })}
                          className={`dropdown dropdown--hover dropdown--boxed-on-mobile dropdown--separate-groups dropdown--restricted ${showLanguage ? "is-active" : ""}`}
                        >
                          <div className={`dropdown_toggle js-dropdown-toggle ${showLanguage ? "is-active" : ""}`}>
                            <a className="dropdown_toggle-action">
                              <span className="dropdown_prefix">English</span>
                              <span className="dropdown_toggle-text"></span>
                              <span
                                className="icon icon--currentColor dropdown_arrow"
                                style={{width: "14px", height: "14px"}}
                              >
                                <TriangleDown />
                              </span>
                            </a>
                          </div>
                          <div className="dropdown_menu-container">
                            <div className={`dropdown_menu ${showLanguage ? "is-visible" : "" }`}>
                              <div className="dropdown_menu-inner">
                                <ul className="dropdown_menu-group">
                                  <li className="dropdown_item">
                                    <a className="dropdown_link">
                                      <span className="dropdown_label">Bahasa Malaysia (Malaysia)</span>
                                    </a>
                                  </li>
                                </ul>
                                <ul className="dropdown_menu-group">
                                  <li className="dropdown_item">
                                    <a className="dropdown_link">
                                      <span className="dropdown_label">Čeština (Česká republika)</span>
                                    </a>
                                  </li>
                                </ul>
                                <ul className="dropdown_menu-group">
                                  <li className="dropdown_item">
                                    <a className="dropdown_link">
                                      <span className="dropdown_label">Dansk (Danmark)</span>
                                    </a>
                                  </li>
                                </ul>
                                <ul className="dropdown_menu-group">
                                  {[
                                    "Deutschland",
                                    "Schweiz",
                                    "Österreich"
                                  ].map(dialect =>
                                  <li key={dialect} className="dropdown_item">
                                    <a className="dropdown_link">
                                      <span className="dropdown_label">Deutsch ({dialect})</span>
                                    </a>
                                  </li>)}
                                </ul>
                                <ul className="dropdown_menu-group">
                                  {[
                                    "Australia",
                                    "Belgium",
                                    "Canada",
                                    "Hong Kong",
                                    "Malaysia",
                                    "New Zealand",
                                    "Philippines",
                                    "Republic of Ireland",
                                    "Singapore",
                                    "Switzerland",
                                    "United Kingdom",
                                    "United States"
                                  ].map(dialect =>
                                  <li key={dialect} className="dropdown_item">
                                    <a className="dropdown_link">
                                      <span className="dropdown_label">English ({dialect})</span>
                                    </a>
                                  </li>)}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="footer-menu_section footer-country">
                      <h3 className="footer-menu_header responsive-hidden-small">Countries</h3>
                      <div>
                        <div
                          onClick={() => this.setState({ showCountry: !showCountry, showLanguage: false })}
                          className={`dropdown dropdown--hover dropdown--boxed-on-mobile dropdown--restricted ${showCountry ? "is-active" : "" }`}>
                          <div className={`dropdown_toggle js-dropdown-toggle ${showCountry ? "is-active" : "" }`}>
                            <a className="dropdown_toggle-action" data-dropdown-prefix >
                              <span className="dropdown_prefix">United States</span>
                              <span className="dropdown_toggle-text"></span>
                              <span
                                className="icon icon--currentColor dropdown_arrow"
                                style={{width: "14px", height: "14px"}}
                              >
                                <TriangleDown />
                              </span>
                            </a>
                          </div>
                          <div className="dropdown_menu-container">
                            <div className={`dropdown_menu ${showCountry ? "is-visible" : "" }`}>
                              <div className="dropdown_menu-inner">
                                {[
                                  "Argentina",
                                  "Australia",
                                  "Austria",
                                  "Belgium",
                                  "Brazil",
                                  "Canada",
                                  "Chile",
                                  "Czech Republic",
                                  "Denmark",
                                  "Finland"
                                ].map(country =>
                                <ul key={country} className="dropdown_menu-group">
                                  <li className="dropdown_item">
                                    <a className="dropdown_link">
                                      <span className="dropdown_label">{country}</span>
                                    </a>
                                  </li>
                                </ul>)}

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="main-footer_mobile-links responsive-visible-small-block hidden-non-responsive-block">
                <ul className="footer-menu--inline u-text-centered">
                  {["About", "Blog", "Support", "Terms"].map(name =>
                  <li key={name} className="footer-menu_item" >
                    <a>{name}</a>
                  </li>)}
                </ul>
              </div>
              <small className="main-footer_copyright">
                Copyright © 2004–2018 Yelp Inc. Yelp,&nbsp;
                <img className="main-footer_logo-copyright" src={logo} alt="logo" />,&nbsp;
                <img className="main-footer_logo-burst" src={burst} alt="burst" />&nbsp;
                and related marks are registered trademarks of Yelp.
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
