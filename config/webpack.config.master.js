const baseConfig = require("./webpack.config.base");

const masterConfig = Object.assign({}, baseConfig);
masterConfig.entry = "./src/master/app.ts";
masterConfig.output.filename = "./build/master.js";

module.exports = masterConfig;
