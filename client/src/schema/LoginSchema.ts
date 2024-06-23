import * as yup from "yup";

export interface LoginSchema {
  email: string;
  password: string;
}

export const validationSchema: yup.AnySchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(50).required(),
});
