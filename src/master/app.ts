import * as http from "http";
import * as minimist from "minimist";
import * as path from "path";
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
    "> npm run master -- --masterPort=[port]");
  console.log("\x1b[33m%s\x1b[0m\x1b[93m%s\x1b[0m",
    "Or like this:\r\n",
    "> node build/master.js --masterPort=[port]\r\n");
}

// main
const app = http.createServer();
const master = socketServer(app);
master.on("connection", (socket) => {
  console.log("onConnection");
  console.log(new Date().getTime());
  socket.emit("connection:m-c", { id: socket.id });

  socket.on("connection:c-m", (data: any) => {
    console.log("onConnection:m-c");
    console.log(new Date().getTime());
  });
  socket.on("connect:c-m", (data: any) => {
    console.log("onConnect:m-c");
    console.log(new Date().getTime());
  });
});
master.on("connect", (socket) => {
  console.log("onConnect");
  console.log(new Date().getTime());
  socket.emit("connect:m-c", { id: socket.id });
});

app.listen(masterPort);

// console port
console.log("\x1b[92m%s\x1b[0m", `* Master listening on port ${masterPort}`);
// console ip list
import os = require("os");
const ifaces = os.networkInterfaces();
for (const dev in ifaces) {
  if (Object.prototype.hasOwnProperty.call(ifaces, dev)) {
    ifaces[dev].forEach((details, alias) => {
      if (details.family === "IPv4") {
        console.log("\x1b[92m%s\x1b[0m",
          `* Master ip list: ${details.address} - ${dev + (alias ? ":" + alias : "")}`);
      }
    });
  }
}
