import types from "../constants/ActionTypes";
import getSocket from "../getSocket";

let socket: any;

function updateNodes(appData: any) {
  return {
    data: appData,
    type: types.UPDATE_APP_DATA,
  };
}

export default {
  connect: (socketUrl: string, username: string) => {
    return (dispatch: any) => {
      socket = getSocket(socketUrl, username);
      socket.on("connect", () => {
        console.log("connected");
      });
    };
  },
  getNodes: () => {
    return (dispatch: any) => {
      socket.emit("admin/getNodes");
      socket.on("admin/getNodes", (data: any) => {
        console.log(data);
      });
    };
  },
};
