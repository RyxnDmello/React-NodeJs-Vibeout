import * as yup from "yup";

export interface RegisterSchema {
  profile: string;
  username: string;
  email: string;
  number: number;
  password: string;
  retypePassword: string;
}

export const validationSchema: yup.AnySchema = yup.object().shape({
  profile: yup.string().required(),
  username: yup.string().min(4).max(50).required(),
  email: yup.string().email().required(),
  number: yup
    .number()
    .required()
    .test("Length", (val) => val?.toString().length === 10),
  password: yup.string().min(4).max(50).required(),
  retypePassword: yup.string().min(4).max(50).required(),
});
