import { useFormik } from "formik";
import axios from "axios";

import { LoginSchema, validationSchema } from "../../schema/LoginSchema";

const _api: string = import.meta.env.PROD
  ? `${import.meta.env.VITE_SERVER_API}/api`
  : "/api";

export default function useLogin() {
  const onLogin = async () => {
    try {
      axios.post(`${_api}/account/login`, { ...values });
    } catch (error) {
      console.log(error instanceof Error && error.message);
    }
  };

  const initialValues: LoginSchema = {
    email: "",
    password: "",
  };

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async () => await onLogin(),
  });

  return { onLoginSubmit: handleSubmit, onLoginChange: handleChange };
}
