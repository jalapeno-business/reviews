const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'client', 'src', 'reviews.jsx'),
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'client', 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  // watch: true,
  devServer: {
    contentBase: './client/dist',
    hot: true,
  },
};
