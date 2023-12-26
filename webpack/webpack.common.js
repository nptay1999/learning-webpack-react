const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', 'src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.jsx', '.js'],
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
      },
      {
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        test: /\.css$/,
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: 'asset/inline',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'script/bundle.js',
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'src/public/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/index.css',
    }),
  ],
};
