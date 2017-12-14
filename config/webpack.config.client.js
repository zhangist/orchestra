const baseConfig = require("./webpack.config.base");

const clientConfig = Object.assign({}, baseConfig);
clientConfig.entry = "./src/client/app.ts";
clientConfig.output.filename = "./build/client.js";

module.exports = clientConfig;
