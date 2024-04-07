import dotenv from "dotenv";
import Express, { Application } from "express";
import { json, urlencoded } from "body-parser";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

import chatsRouter from "./routes/Chats";
import projectsRouter from "./routes/Projects";

dotenv.config();

const app: Application = Express();
const server = createServer(app);

const io: Server = new Server(server, {
  cors: {
    origin: process.env.CLIENT_CORS,
    methods: ["GET", "POST"],
  },
});

app.use(urlencoded({ extended: true }));
app.use(json());

app.use(
  cors({
    origin: process.env.CLIENT_CORS,
    methods: ["GET", "POST"],
  })
);

app.use("/chats", chatsRouter);
app.use("/projects", projectsRouter);

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

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
