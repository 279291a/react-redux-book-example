import Express from 'express';
import qs from 'qs';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import webpackConfig from '../webpack.config';

import configureStore from '../common/store/configureStore';
import App from '../common/containers/App';
import { fetchCounter } from '../common/api/counter';

const app = new Express();
const port = 3002;

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));

function renderFullPage(html, initialState) {
  return `
  <!doctype html>
    <head>
      <title>redux universal example</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        window.__INITIAL_STATE = ${JSON.stringify(initialState)}
      </script>
      <script src="/static/bundle.js"></script>
    </body>
  </html>
  `;
}

function handleRender(req, res) {
  fetchCounter((apiResult) => {
    console.log(req.query);
    const params = qs.parse(req.query);
    const counter = parseInt(params.counter, 10) || apiResult || 0;

    const initialState = { counter };
    const store = configureStore(initialState);

    const html = renderToString(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const finalState = store.getState();
    res.send(renderFullPage(html, finalState));
  });
}

app.use(handleRender);

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});
