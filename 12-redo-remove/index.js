import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import counter from './reducers';
import Connect from './containers/connect';

const store = createStore(counter, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <div>
      <h2>使用react-redux连接</h2>
      <Connect/>
    </div>
  </Provider>,
  document.getElementById('root'),
);
