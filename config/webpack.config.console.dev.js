const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const appConfig = require("./app.config");
const baseConfig = require("./webpack.config.console.base");

baseConfig.devtool = "eval-source-map";
baseConfig.entry.bundle.push("webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000");
baseConfig.output.filename = "[name].js";
baseConfig.output.chunkFilename = "chunk.[name].js";
baseConfig.plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    names: ["vendor", "manifest"], // manifest -> runtime and manifest of webpack
    filename: "[name].js",
  }),
  new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
  new HtmlWebpackPlugin({
    filename: "index.html",
    template: "./src/console/index.html",
    favicon: path.resolve(__dirname, "../src/console/favicon.ico"),
    chunksSortMode: "dependency",
    staticHost: appConfig.staticHost["dev"],
  }),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new ProgressBarPlugin({ summary: false }),
];

module.exports = baseConfig;
