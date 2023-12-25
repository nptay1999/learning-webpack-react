const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".jsx", ".js"],
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "src/public/index.html"),
    }),
  ],
};
