const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const appConfig = require("./app.config");
const baseConfig = require("./webpack.config.console.base");

baseConfig.output.filename = "[name].[chunkhash:8].js";
baseConfig.output.chunkFilename = "chunk.[name].[chunkhash:8].js";
baseConfig.plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    names: ["vendor", "manifest"], // manifest -> runtime and manifest of webpack
    filename: "[name].[chunkhash:8].js",
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    comments: false,
  }),
  new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
  new HtmlWebpackPlugin({
    filename: "index.html",
    template: "./src/console/index.html",
    favicon: path.resolve(__dirname, "../src/console/favicon.ico"),
    chunksSortMode: "dependency",
    staticHost: appConfig.staticHost["prd"],
  }),
  new CopyWebpackPlugin([
    { from: "src/console/favicon.ico", to: "favicon.ico" }
  ]),
  new webpack.NoEmitOnErrorsPlugin(),
];

module.exports = baseConfig;
