import React from 'react';
import ReactDOM from 'react-dom';
import MobileMenu from './MobileMenu';

it("renders without crashes", () => {
  const div = document.createElement('div');
  ReactDOM.render(<MobileMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
})
