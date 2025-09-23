const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("Novo usuário conectado");

  socket.on("chatMessage", (message) => {
    io.emit("chatMessage", message);
  });
});

server.listen(3001, '0.0.0.0', () => {
  console.log("Servidor de backend iniciado na porta 3001");
});
