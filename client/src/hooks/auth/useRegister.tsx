import { useRef, useState } from "react";
import { useFormik } from "formik";
import axios, { AxiosError } from "axios";

import { RegisterSchema, validationSchema } from "../../schema/RegisterSchema";

const _api: string = import.meta.env.PROD
  ? `${import.meta.env.VITE_SERVER_API}/api`
  : "/api";

export type FormType = "REGISTER" | "LOGIN";

export default function useRegister(profile: string) {
  const [error, setError] = useState<string>("");
  const errorRef = useRef<HTMLDivElement>(null);

  const onRegister = async () => {
    try {
      const response = await axios.post(`${_api}/account/register`, values);
      console.log(response.data);
    } catch (error: unknown) {
      setError(error instanceof AxiosError && error.response?.data);
      onErrorToast();
    }
  };

  const onErrorToast = () => {
    errorRef.current?.classList.remove("hide");
    errorRef.current?.classList.add("reveal");

    setTimeout(() => {
      errorRef.current?.classList.remove("reveal");
      errorRef.current?.classList.add("hide");
      handleReset({});
    }, 5000);
  };

  const initialValues: RegisterSchema = {
    profile: profile,
    username: "",
    email: "",
    number: 0,
    password: "",
    retypePassword: "",
  };

  const { values, errors, handleSubmit, handleChange, handleReset } =
    useFormik<RegisterSchema>({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: async () => await onRegister(),
    });

  return {
    registerFormValues: values,
    registerErrorRef: errorRef,
    registerFormErrors: errors,
    registerResponseError: error,
    onRegisterSubmit: handleSubmit,
    onRegisterChange: handleChange,
  };
}
