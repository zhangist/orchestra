import * as http from "http";
import * as minimist from "minimist";
import * as socketServer from "socket.io";
import * as appConfig from "../appConfig";

// args
const args = minimist(process.argv.slice(2), {
  string: ["masterPort"],
});
// master port
const masterPort = args.masterPort || appConfig.masterPort;
// console
if (!args.masterPort) {
  console.log("\x1b[33m%s\x1b[0m\x1b[93m%s\x1b[0m",
    "For temporary master port, use command like this:\r\n",
    "> npm run master -- --masterPort=[master port]");
  console.log("\x1b[33m%s\x1b[0m\x1b[93m%s\x1b[0m",
    "Or like this:\r\n",
    "> node build/master.js --masterPort=[master port]\r\n");
}

// main
const app = http.createServer();
const master = socketServer(app);
master.on("connection", (socket) => {
  console.log("onConnection");
  socket.emit("newConnection", { id: socket.id });
});
master.on("connect", (socket) => {
  console.log("onConnect");
  socket.emit("newConnect", { id: socket.id });
});

app.listen(masterPort);

console.log(`* Master listening on port ${masterPort}`);
