import { Request, Response } from "express";

export const add = (req: Request, res: Response) => {
  console.log("OBJECTIVE ADDED:");
  console.log(req.body);
};

export const complete = (req: Request, res: Response) => {
  console.log(req.body);
};

export const remove = (req: Request, res: Response) => {
  console.log(req.body);
};
