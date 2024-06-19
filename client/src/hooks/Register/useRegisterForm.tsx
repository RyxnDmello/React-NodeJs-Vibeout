import { useFormik } from "formik";
import axios from "axios";

import {
  RegisterSchema,
  RegisterValidationSchema,
} from "../../interfaces/register/Schema";

export default function useRegisterForm(profile: string) {
  const onRegister = async () => {
    try {
      await axios.post("http://localhost:8080/account/create", values);
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
    validationSchema: RegisterValidationSchema,
    onSubmit: async () => await onRegister(),
  });

  return { handleSubmit, handleChange };
}
