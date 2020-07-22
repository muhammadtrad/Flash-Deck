import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

const style = require('./style.css');

render(
    <Provider store={store}>
      <App compiler='TypeScript' framework='React' />
    </Provider>,
    document.getElementById('root')
);