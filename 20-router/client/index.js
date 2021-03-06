import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import configureStore from '../common/store/configureStore';
import getRoutes from '../common/routes';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const root = document.getElementById('root');
const routes = getRoutes();
const history = browserHistory;

render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  root,
);
