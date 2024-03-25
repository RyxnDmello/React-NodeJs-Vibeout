import dotenv from "dotenv";
dotenv.config();

import Express, { Application } from "express";
import { json, urlencoded } from "body-parser";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app: Application = Express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.use(
  cors({
    origin: "http://localhost:8085",
    methods: ["GET", "POST"],
  })
);

const server = createServer(app);

const io: Server = new Server(server, {
  cors: {
    origin: "http://localhost:8085",
    methods: ["GET", "POST"],
  },
});

const dummyChats = [
  {
    room: "10",
    email: "rhea@gmail.com",
    username: "Rhea",
  },
  {
    room: "15",
    email: "nathan@gmail.com",
    username: "Nathan",
  },
  {
    room: "20",
    email: "messy@gmail.com",
    username: "Messy",
  },
  {
    room: "25",
    email: "drake@gmail.com",
    username: "Drake",
  },
  {
    room: "30",
    email: "drake@gmail.com",
    username: "Diddy",
  },
  {
    room: "35",
    email: "drake@gmail.com",
    username: "Michael",
  },
];

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.emit("chats", dummyChats);

  socket.on("joinRoom", (room) => {
    console.log(`User ID: ${socket.id} | Room ID: ${room}`);
    socket.join(room);
  });

  socket.on("sendMessage", (message) => {
    socket.in(message.room).emit("messages", message);
  });

  socket.on("disconnect", () => console.log(`User Disconnected: ${socket.id}`));
});

server.listen(process.env.DEVELOPMENT_PORT || process.env.PORT, () => {
  console.log(`ACTIVE | ${process.env.DEVELOPMENT_PORT || process.env.PORT}`);
});
