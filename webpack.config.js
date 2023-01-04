const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'index.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Ricemilk1122 Blog since 2023',
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
    ],
  },
};

module.exports = config;
