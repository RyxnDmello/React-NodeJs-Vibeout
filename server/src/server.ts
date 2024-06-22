import dotenv from "dotenv";
import { createServer } from "http";

import app from "./app";
import initSockets from "./services/socketService";

dotenv.config();

const server = createServer(app);
initSockets(server);

server.listen(process.env.DEVELOPMENT_PORT || process.env.PORT, () => {
  console.log(`ACTIVE | ${process.env.DEVELOPMENT_PORT || process.env.PORT}`);
});
