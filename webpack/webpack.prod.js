const webpack = require('webpack');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('CodeLearning'),
    }),
    new WebpackBundleAnalyzer.BundleAnalyzerPlugin(),
  ],
};
