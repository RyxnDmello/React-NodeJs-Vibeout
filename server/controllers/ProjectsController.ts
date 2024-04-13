import { Request, Response } from "express";

import { projects as dummy } from "../data/projects";
import { IProject } from "../interfaces/Manager";

export const projects = (req: Request, res: Response) => {
  const query: IProject[] = dummy.filter(
    (project) => project.id === req.body.room
  );

  res.send(query);
};

export const add = (req: Request, res: Response) => {
  console.log(req.body);
};
