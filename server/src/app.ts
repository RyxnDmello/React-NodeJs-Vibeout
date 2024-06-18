import dotenv from "dotenv";
import Express, { Application } from "express";
import { urlencoded, json } from "body-parser";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

import connectMongoDB from "./database/DatabaseManager";

import accountRouter from "./routes/accountRouter";
import chatsRouter from "./routes/chatsRouter";
import projectsRouter from "./routes/projectsRouter";
import objectivesRouter from "./routes/objectivesRouter";

dotenv.config();

const app: Application = Express();
const server = createServer(app);

const io: Server = new Server(server, {
  cors: {
    origin: process.env.CORS,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  },
});

app.use(urlencoded({ extended: true }));
app.use(json());

app.use(
  cors({
    origin: process.env.CORS,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);

connectMongoDB();

app.use("/account", accountRouter);
app.use("/chats", chatsRouter);
app.use("/projects", projectsRouter);
app.use("/objectives", objectivesRouter);

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
