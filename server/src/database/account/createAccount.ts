import accountModel from "../../models/AccountModel";

import { Account } from "../../interfaces/Account";

const createAccount = async (account: Account) => {
  const dbAccount = await accountModel.findOne({
    email: account.email,
  });

  if (dbAccount !== null) {
    throw new Error("Account Already Exists");
  }

  if (account.password !== account.retypePassword) {
    throw new Error("Password Mismatch");
  }

  const newAccount = new accountModel({ ...account });

  try {
    return await newAccount.save();
  } catch {
    throw new Error("Database Crashed Unexpectedly");
  }
};

export default createAccount;
