// server.js

const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

const config = require('./webpack.config');

const isDeveloping = process.env.NODE_ENV !== 'production';
const app = express();

if (isDeveloping) {
  const compiler = webpack(config);

  app
    .use(devMiddleware(compiler, { publicPath: config.output.publicPath }))
    .use(hotMiddleware(compiler));
}

app
  .disable('etag')
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(express.static(path.resolve(__dirname)));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`App entryening on port ${PORT}!`); // eslint-disable-line
});
