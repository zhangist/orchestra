import * as socketServer from "socket.io";

export default (server: SocketIO.Server) => {
  // on connection
  server.on("connection", (socket) => {
    console.log("onConnection");
    socket.emit("event", { data: "data" });
  });
  // on disconnect
  server.on("disconnect", (data: any) => {
    console.log("onDisconnect");
  });
};
