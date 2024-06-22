import { Request, Response } from "express";

import registerAccount from "../database/account/registerAccount";
import loginAccount from "../database/account/loginAccount";

export const register = async (req: Request, res: Response) => {
  try {
    const account = await registerAccount(req.body);

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

export const login = async (req: Request, res: Response) => {
  try {
    const account = await loginAccount(req.body);

    res.status(200).json({
      username: account.username,
      email: account.email,
    });
  } catch (error) {
    res.status(404).json({
      error: error instanceof Error && error.message,
    });
  }
};
