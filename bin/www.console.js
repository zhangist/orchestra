const path = require("path");
const minimist = require("minimist");
const serve = require("koa-static");
const convert = require("koa-convert");

const devMiddleware = require("koa-webpack-dev-middleware");
const hotMiddleware = require("koa-webpack-hot-middleware");

// args
const args = minimist(process.argv.slice(2));
const env = args.env || "dev";
const consolePort = parseInt(args.consolePort) || 8088;

const Koa = require("koa");
const app = new Koa();

const webapck = require("webpack");
const webapckConfig = require("../config/webpack.config.console");
const compiler = webapck(webapckConfig);

if (env === "prd") {
  // app.use(serve(__dirname + "../build/"));
} else {
  // Put to the end
  // webpack dev middleware
  app.use(convert(devMiddleware(compiler, {
    noInfo: true,
  })));
  // webpack hot middleware
  app.use(convert(hotMiddleware(compiler)));
}

app.use(serve(path.resolve(__dirname, "../build/console/")));

app.listen(consolePort, () => {
  console.log(`\r\nConsole is listening on port ${consolePort}.`);
});
