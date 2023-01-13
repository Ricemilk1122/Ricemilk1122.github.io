const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  entry: '/src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'js/index.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Ricemilk1122 Blog since 2023',
      favicon: './img/favicon.gif',
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
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
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
};

module.exports = config;
