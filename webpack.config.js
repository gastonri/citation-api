const path = require('path');

module.exports = {
  mode: 'development',
  context: path.join(__dirname, './'),
  entry: ['@babel/polyfill', './app/index.js'],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
