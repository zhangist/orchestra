const path = require("path");
const autoprefixer = require("autoprefixer");

// base config
const baseConfig = {
  entry: {
    bundle: [
      "./src/console/index.tsx"
    ],
    vendor: [
      //"antd",
      //"material-ui",
      "react",
      "react-dom",
      "react-redux",
      "react-router",
      "react-router-config",
      "react-router-dom",
      "redux",
      "redux-thunk",
      "socket.io-client",
      "styled-components",
      "material-ui/AppBar",
      "material-ui/Button",
      "material-ui/Dialog",
      "material-ui/Dialog/DialogContent",
      "material-ui/Icon",
      "material-ui/Modal",
      "material-ui/Toolbar",
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

module.exports = baseConfig;
