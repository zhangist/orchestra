const path = require("path");
const autoprefixer = require("autoprefixer");

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
      "material-ui",
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
