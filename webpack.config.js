const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  entry: {
    home: './src/home.tsx',
    article: './src/article.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'js/[name].[hash].js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Ricemilk1122 Blog since 2023',
      favicon: './img/favicon.gif',
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['home'],
    }),
    new HtmlWebpackPlugin({
      title: 'Article',
      favicon: './img/favicon.gif',
      template: './src/index.html',
      filename: 'article.html',
      chunks: ['article'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: ['babel-loader', 'ts-loader'],
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
