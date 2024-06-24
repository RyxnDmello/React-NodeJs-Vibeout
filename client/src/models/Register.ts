import Username from "../images/register/username.svg";
import Email from "../images/register/email.svg";
import Number from "../images/register/number.svg";
import Password from "../images/register/password.svg";

export interface Input {
  icon: string;
  label: string;
  name: string;
  type: "text" | "number" | "email" | "password";
}

export const register: Input[] = [
  {
    icon: Username,
    label: "Username",
    name: "username",
    type: "text",
  },
  {
    icon: Email,
    label: "Email",
    name: "email",
    type: "email",
  },
  {
    icon: Number,
    label: "Number",
    name: "number",
    type: "number",
  },
  {
    icon: Password,
    label: "Password",
    name: "password",
    type: "password",
  },
  {
    icon: Password,
    label: "Retype Password",
    name: "retypePassword",
    type: "password",
  },
];

export const login: Input[] = [
  {
    icon: Email,
    label: "Email",
    name: "email",
    type: "email",
  },
  {
    icon: Password,
    label: "Password",
    name: "password",
    type: "password",
  },
];
