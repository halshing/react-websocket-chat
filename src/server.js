const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const port = 3001;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", socket => {
  console.log(socket.handshake.address);

  socket.on("sendMessage", message => {
    io.emit("sendMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(port, () => console.log(`Server running on port ${port}`));
