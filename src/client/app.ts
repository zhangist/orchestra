import * as minimist from "minimist";
import * as socketServer from "socket.io";
import * as socketClient from "socket.io-client";
import * as appConfig from "../appConfig";

// args
const args = minimist(process.argv.slice(2), {
  string: ["masterHost", "masterPort", "clientPort"],
});
// master host and port
const masterHost = args.masterHost || appConfig.masterHost;
const masterPort = args.masterPort || appConfig.masterPort;
// client port
const clientPort = args.clientPort || appConfig.clientPort;
// console
if (!args.masterHost) {
  console.log("\x1b[33m%s\x1b[0m\x1b[93m%s\x1b[0m",
    "For temporary master address, use command like this:\r\n",
    "> npm run client -- --masterHost=[master host] --masterPort=[master port] --clientPort=[client port]");
  console.log("\x1b[33m%s\x1b[0m\x1b[93m%s\x1b[0m",
    "Or like this:\r\n",
    "> node build/client.js --masterHost=[master host] --masterPort=[master port] --clientPort=[client port]\r\n");
}

// main
const clientServer = socketServer(clientPort);
const client = socketClient(masterHost + ":" + masterPort);
client.on("connect", (data: any) => {
  console.log("onConnect");
  console.log(data);
});
client.on("connection", (data: any) => {
  console.log("onConnection");
  console.log(data);
});
client.on("newConnection", (data: any) => {
  console.log("newConnection");
  console.log(data);
});
client.on("newConnect", (data: any) => {
  console.log("newConnect");
  console.log(data);
});

console.log("\x1b[33m%s%s%s\x1b[0m",
  `* Client listening on port ${clientPort}\r\n`,
  `* Master host: ${masterHost}\r\n`,
  `* Master port: ${masterPort}\r\n`,
);
