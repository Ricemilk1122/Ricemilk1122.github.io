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
      favicon: './img/favicon.gif',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name]_[hash][ext]',
        },
      },
    ],
  },
};

module.exports = config;
