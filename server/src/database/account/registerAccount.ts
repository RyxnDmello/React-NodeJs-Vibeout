import accountModel from "../../models/AccountModel";

import { RegisterAccount } from "../../interfaces/Account";

const registerAccount = async (account: RegisterAccount) => {
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
  } catch (error) {
    throw new Error("Database Crashed Unexpectedly");
  }
};

export default registerAccount;
