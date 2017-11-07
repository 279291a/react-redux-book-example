/*eslint-disable*/
import Express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';

var app = new Express();
var port = 3001;

var compiler = webpack(webpackConfig);
app.use(
  webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath })
);
app.use(webpackHotMiddleware(compiler));

app.listen(port,(error) => {
  if(error){
    console.error(error);
  }else{
    console.info(`webpack development server listening on port ${port}`);
  }
})
