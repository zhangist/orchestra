// const path = require("path");
const fs = require("fs");
// const webpack = require("webpack");

let nodeModules = {};
fs.readdirSync("node_modules")
  .filter(function(x) {
    return [".bin"].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = "commonjs " + mod;
  });

module.exports = {
  entry: "./src/client/app.ts",
  output: {
    filename: "./build/client.js",
  },
  target: "node",
  node: {
    __filename: true,
    __dirname: true,
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json"],
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader" }
    ]
  },
  externals: nodeModules,
  plugins: [
    // new webpack.ContextReplacementPlugin(
    //   /.*$/,
    //   /NEVER_MATCH^/
    // )
  ]
};
