import { IInput } from "../../interfaces/register/Form";

import Username from "../../images/register/username.svg";
import Email from "../../images/register/email.svg";
import Number from "../../images/register/number.svg";
import Password from "../../images/register/password.svg";

export const inputs: IInput[] = [
  {
    icon: Username,
    label: "Username",
    name: "username",
    type: "text",
    required: true,
  },
  {
    icon: Email,
    label: "Email",
    name: "email",
    type: "email",
    required: true,
  },
  {
    icon: Number,
    label: "Number",
    name: "number",
    type: "number",
    required: true,
  },
  {
    icon: Password,
    label: "Password",
    name: "password",
    type: "password",
    required: true,
  },
  {
    icon: Password,
    label: "Retype Password",
    name: "retypePassword",
    type: "password",
    required: true,
  },
];
