import dotenv from "dotenv";
import { sign } from "jsonwebtoken";

dotenv.config();

export const createAuthToken = (_id: string) => {
  return sign({ _id }, process.env.AUTH_SECRET as string);
};
