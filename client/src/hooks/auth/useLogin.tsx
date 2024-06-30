import { useState, useRef } from "react";
import { useFormik } from "formik";
import axios, { AxiosError } from "axios";

import useAuthContext from "./useAuthContext";

import { LoginSchema, validationSchema } from "../../schema/LoginSchema";

const _api: string = import.meta.env.PROD
  ? `${import.meta.env.VITE_SERVER_API}/api`
  : "/api";

export default function useLogin() {
  const [error, setError] = useState<string>("");
  const errorRef = useRef<HTMLDivElement>(null);
  const { dispatch } = useAuthContext();

  const onLogin = async () => {
    try {
      const response = await axios.post(`${_api}/account/login`, values);
      dispatch({ type: "AUTHENTICATE", payload: response.data });
    } catch (error: unknown) {
      setError(error instanceof AxiosError && error.response!.data);
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

  const initialValues: LoginSchema = {
    email: "",
    password: "",
  };

  const { values, errors, handleSubmit, handleChange, handleReset } = useFormik(
    {
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: async () => await onLogin(),
    }
  );

  return {
    errorRef,
    values,
    errors,
    error,
    onSubmit: handleSubmit,
    onChange: handleChange,
  };
}
