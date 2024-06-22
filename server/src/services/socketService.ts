import dotenv from "dotenv";
import { Server as HttpServer } from "http";
import { Server } from "socket.io";

dotenv.config();

const initSockets = (server: HttpServer) => {
  const io: Server = new Server(server, {
    cors: {
      origin: process.env.CORS,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("room", (room) => {
      console.log(`User ID: ${socket.id} | Room ID: ${room}`);
      socket.join(room);
    });

    socket.on("sendMessage", (message) => {
      socket.in(message.room).emit("messages", message);
    });

    socket.on("disconnect", () =>
      console.log(`User Disconnected: ${socket.id}`)
    );
  });
};

export default initSockets;
