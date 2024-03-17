import dotenv from "dotenv";
dotenv.config();

import Express, { Request, Response } from "express";

const app = Express();

app.get("/", (req: Request, res: Response) => {
  res.json({});
});

app.listen(process.env.DEVELOPMENT_PORT || process.env.PORT, () => {
  console.log(`ACTIVE | ${process.env.DEVELOPMENT_PORT || process.env.PORT}`);
});
