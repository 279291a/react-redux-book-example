import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import counter from './reducers';
import Connect1 from './containers/Connect1';

const store = createStore(counter, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <div>
      <h2>使用react-redux连接</h2>
      <ul>
        <li>
          connect()的前两个参数分别为函数和对象：
          <Connect1 />
        </li>
      </ul>
    </div>
  </Provider>,
  document.getElementById('root'),
);
