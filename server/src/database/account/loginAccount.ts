import { compare } from "bcrypt";

import accountModel from "../../models/AccountModel";

import { LoginAccount } from "../../interfaces/Account";
import { createAuthToken } from "../../utils/AuthToken";

const loginAccount = async (account: LoginAccount) => {
  const dbAccount = await accountModel.findOne({
    email: account.email,
  });

  if (dbAccount === null) {
    throw new Error("Account Does Not Exist");
  }

  if (!(await compare(account.password, dbAccount.password))) {
    throw new Error("Incorrect Password");
  }

  const token = createAuthToken(dbAccount._id.toString());

  return {
    username: dbAccount.username,
    email: dbAccount.email,
    token: token,
  };
};

export default loginAccount;
