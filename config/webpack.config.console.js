const path = require("path");
const webpack = require("webpack");
const minimist = require("minimist");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

// args
const args = minimist(process.argv.slice(2));
const env = args.env || "dev";

// base config
const baseConfig = {
  entry: {
    bundle: [
      "./src/console/index.tsx"
    ],
    vendor: [
      "react",
      "react-dom",
      "redux",
      "react-redux",
    ],
  },
  output: {
    path: path.resolve(__dirname, "../build/console"),
    filename: "[name].js",
    chunkFilename: "chunk.[name].js",
    publicPath: "",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", "json"],
  },
  module: {
    loaders: [
      { test: /\.ts[x]?$/, loader: "ts-loader" },
      {
        test: /\.styl$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              plugins: () => [
                autoprefixer({ browsers: ["> 5%"] }),
              ],
            },
          },
          "stylus-loader",
        ],
      }
    ]
  },
};

// plugins
const plugins = {
  dev: [
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
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ProgressBarPlugin({ summary: false }),
  ],
  prd: [
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
    }),
    new CopyWebpackPlugin([
      { from: "src/console/favicon.ico", to: "favicon.ico" }
    ]),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};

if (env.toLowerCase() === "prd") {
  baseConfig.output.filename = "[name].[chunkhash:8].js";
  baseConfig.output.chunkFilename = "chunk.[name].[chunkhash:8].js";
  baseConfig.plugins = plugins.prd;
} else {
  baseConfig.devtool = "eval-source-map";
  baseConfig.entry.bundle.push("webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000");
  baseConfig.output.filename = "[name].js";
  baseConfig.output.chunkFilename = "chunk.[name].js";
  baseConfig.plugins = plugins.dev;
}

module.exports = baseConfig;
