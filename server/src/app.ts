import dotenv from "dotenv";
import Express, { Application } from "express";
import { urlencoded, json } from "body-parser";
import cors from "cors";

import connectMongoDB from "./services/databaseService";

import accountRouter from "./routes/accountRouter";
import chatsRouter from "./routes/chatsRouter";
import projectsRouter from "./routes/projectsRouter";
import objectivesRouter from "./routes/objectivesRouter";

dotenv.config();

const app: Application = Express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.use(
  cors({
    origin: process.env.CORS,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);

connectMongoDB();

app.use("/api/account", accountRouter);
app.use("/api/chats", chatsRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/objectives", objectivesRouter);

export default app;
