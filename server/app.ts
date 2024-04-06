import dotenv from "dotenv";
dotenv.config();

import Express, { Application } from "express";
import { json, urlencoded } from "body-parser";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

import { IProject } from "./interfaces/Manager";

import { chats } from "./data/chats";
import { projects } from "./data/projects";

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

app.post("/projects", (req, res) => {
  const query: IProject[] = projects.filter(
    (project) => project.id === req.body.room
  );

  res.send(query);
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.emit("chats", chats);

  socket.on("room", (room) => {
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
