import { useFormik } from "formik";
import axios from "axios";

import { RegisterSchema, validationSchema } from "../../schema/RegisterSchema";

const _api: string = import.meta.env.PROD
  ? `${import.meta.env.VITE_SERVER_API}/api`
  : "/api";

export type FormType = "REGISTER" | "LOGIN";

export default function useRegister(profile: string) {
  const onRegister = async () => {
    try {
      await axios.post(`${_api}/account/create`, values);
    } catch (error) {
      console.log(error instanceof Error && error);
    }
  };

  const initialValues: RegisterSchema = {
    profile: profile,
    username: "",
    email: "",
    number: 0,
    password: "",
    retypePassword: "",
  };

  const { values, handleSubmit, handleChange } = useFormik<RegisterSchema>({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async () => await onRegister(),
  });

  return { onRegisterSubmit: handleSubmit, onRegisterChange: handleChange };
}
