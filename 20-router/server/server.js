import Express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import { match, RouterContext } from 'react-router';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import webpackConfig from '../webpack.config';

import configureStore from '../common/store/configureStore';
import getRoutes from '../common/routes';

const app = new Express();
const port = 3002;

app.use(Express.static(path.join(__dirname, '', 'static')));
app.use(favicon(path.join(__dirname, '', 'static', 'favicon.ico')));

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
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
      </script>
      <script src="/static/bundle.js"></script>
    </body>
  </html>
  `;
}

function handleRender(req, res) {
  const initialState = { counter: 0 };
  const store = configureStore(initialState);
  const routes = getRoutes();

  match({ routes, location: req.url }, (err, redirect, renderProps) => {
    if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (err) {
      console.error('router error:', err.stack);
      res.status(500);
    } else if (renderProps) {
      res.status(200);
      const html = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>,
      );
      const finalState = store.getState();
      res.send(renderFullPage(html, finalState));
    } else {
      res.status(404).send('not found');
    }
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
