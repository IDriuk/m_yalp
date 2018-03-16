import React from 'react';
import ReactDOM from 'react-dom';
import Businesses from './Businesses';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Businesses />, div);
  ReactDOM.unmountComponentAtNode(div);
});
