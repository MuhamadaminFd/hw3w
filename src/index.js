import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Comp from './Comp';
import './style.css';

ReactDOM.render(
  <Provider store={store}>
    <Comp />
  </Provider>,
  document.getElementById('root')
);
