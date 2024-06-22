import accountModel from "../../models/AccountModel";

import { LoginAccount } from "../../interfaces/Account";

const loginAccount = async (account: LoginAccount) => {
  const dbAccount = await accountModel.findOne({
    email: account.email,
  });

  if (dbAccount === null) {
    throw new Error("Account Does Not Exist");
  }

  if (account.password !== dbAccount.password) {
    throw new Error("Incorrect Password");
  }

  return dbAccount;
};

export default loginAccount;
