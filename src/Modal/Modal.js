import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('root');

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      modalRoot,
    );
  }
}

export default Modal;
