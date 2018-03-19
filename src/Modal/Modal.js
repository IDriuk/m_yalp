import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const modalRoot = document.getElementById('root');

class Modal extends Component {
  constructor(props) {
    super(props);

    this.el = document.createElement('div');
    this.el.className = "flex-container searchbar-modal minimal-header cta-menubar-pitch-modal";
  }

  componentDidMount() {

    if (modalRoot) {
      modalRoot.appendChild(this.el);
    } else {
      document.body.appendChild(this.el);
    }

  }

  componentWillUnmount() {

    if (modalRoot) {
      modalRoot.removeChild(this.el);
    } else {
      document.body.removeChild(this.el);
    }

  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

export default Modal;
