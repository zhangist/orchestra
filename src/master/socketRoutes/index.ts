import * as socketServer from "socket.io";

export default (server: SocketIO.Server) => {
  // on connection
  server.on("connection", (socket) => {
    console.log("onConnection");
    socket.emit("event", { data: "data" });

    // on admin/getNodes
    socket.on("admin/getNodes", (data: any) => {
      const sockets = server.sockets.clients((socketItem: any) => {
        return {
          id: socketItem.id,
        };
      });
      socket.emit("admin/getNodes", {
        data: sockets,
      });
    });
  });
  // on disconnect
  server.on("disconnect", (data: any) => {
    console.log("onDisconnect");
  });
};
