import React from 'react';
import ReactDOM from 'react-dom';
import Nearby from './Nearby';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Nearby />, div);
  ReactDOM.unmountComponentAtNode(div);
});
