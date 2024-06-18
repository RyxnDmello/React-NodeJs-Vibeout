import { Request, Response } from "express";

import createAccount from "../database/account/createAccount";

export const create = async (req: Request, res: Response) => {
  try {
    const account = await createAccount(req.body);

    res.status(200).json({
      username: account.username,
      email: account.email,
    });
  } catch (error: unknown) {
    res.status(404).json({
      error: error instanceof Error && error.message,
    });
  }
};
