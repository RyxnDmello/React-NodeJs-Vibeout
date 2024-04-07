import { Request, Response } from "express";

import { chats as query } from "../data/chats";

export const chats = (req: Request, res: Response) => {
  res.send(query);
};
