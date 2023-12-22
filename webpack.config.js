const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devConfig = {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "scripts/index.bundle.js",
  },
  devServer: {
    port: 3000,
    watchContentBase: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
        test: /\.m?(js|jsx)$/,
        exclude: /node_modules/,
      },
      {
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        test: /\.css$/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new MiniCssExtractPlugin({
      filename: "styles/index.css",
    }),
  ],
};

module.exports = devConfig;
