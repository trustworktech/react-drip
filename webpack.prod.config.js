const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: ['webpack-hot-middleware/client', './src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader/webpack', 'babel-loader'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /(\.css)$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    symlinks: false,
    alias: {
      react: path.resolve(__dirname, 'node_modules', 'react'),
      'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components'),
    },
  },
};
