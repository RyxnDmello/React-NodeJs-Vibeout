import { hash } from "bcrypt";

import accountModel from "../../models/AccountModel";

import { RegisterAccount } from "../../interfaces/Account";
import { createAuthToken } from "../../utils/AuthToken";

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

  const encryptedPassword = await hash(account.password, 12);

  const newAccount = new accountModel({
    ...account,
    password: encryptedPassword,
  });

  try {
    const createdAccount = await newAccount.save();
    const token = createAuthToken(createdAccount._id.toString());

    return {
      username: createdAccount.username,
      email: createdAccount.email,
      token: token,
    };
  } catch (error) {
    throw new Error("Database Crashed Unexpectedly");
  }
};

export default registerAccount;
