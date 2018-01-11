const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const baseConfig = require("./webpack.config.console.prd");

baseConfig.plugins.push(new BundleAnalyzerPlugin());

module.exports = baseConfig;
