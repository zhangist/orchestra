import * as io from "socket.io-client";

export default (socket: SocketIOClient.Socket) => {
  // on client connect to master
  socket.on("connect", (data: any) => {
    console.log("onConnect");
  });
  // on disconnect
  socket.on("disconnect", (data: any) => {
    console.log("onDisconnect");
  });
};
