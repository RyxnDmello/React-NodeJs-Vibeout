import { Request, Response } from "express";

import { rooms } from "../data/rooms";
import { IRoom } from "../interfaces/Manager";

export const projects = (req: Request, res: Response) => {
  const databaseRoom: IRoom = rooms.filter(
    (room: IRoom) => room.room === req.body.room
  )[0];

  if (databaseRoom === undefined) {
    res.send([]);
    return;
  }

  res.send(databaseRoom.projects);
};

export const create = (req: Request, res: Response) => {
  console.log("PROJECT CREATED:");
  console.log(req.body);
};
