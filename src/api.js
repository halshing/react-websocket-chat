import socketIOClient from "socket.io-client";

const socket = socketIOClient("http://localhost:3001");

export const sendMessage = message => {
  socket.emit("sendMessage", message);
};

export const receiveMessage = (callback) => {
  socket.on("sendMessage", callback);
}
