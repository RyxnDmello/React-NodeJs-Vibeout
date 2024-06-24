import { FormEvent, RefObject } from "react";
import { FormikValues, FormikErrors } from "formik";
import { Link } from "react-router-dom";

import useProfilePicker from "../../hooks/register/useProfilePicker";

import { Input as Inputs } from "../../models/Register";

import { RegisterSchema } from "../../schema/RegisterSchema";
import { LoginSchema } from "../../schema/LoginSchema";

import Profile from "./Form/Profile";
import Input from "./Form/Input";
import Button from "./Form/Button";
import Error from "./Form/Error";

import styles from "./Form.module.scss";

interface FormProps {
  type: "REGISTER" | "LOGIN";
  inputs: Inputs[];
  error: string;
  errorRef: RefObject<HTMLDivElement>;
  values: FormikValues;
  errors: FormikErrors<RegisterSchema | LoginSchema>;
  onSubmit: (event?: FormEvent<HTMLFormElement>) => void;
  onChange: (event: string | React.ChangeEvent) => void;
}

export default function Form({
  inputs,
  type,
  error,
  errorRef,
  values,
  errors,
  onSubmit,
  onChange,
}: FormProps) {
  const {
    image,
    picker,
    onSelectImage,
    onOpenImagePicker,
    onOpenAvatarPicker,
  } = useProfilePicker();

  return (
    <div className={styles.form}>
      <form onSubmit={onSubmit}>
        <div className={styles.header}>
          <h2>{type === "REGISTER" ? "Create Account" : "Welcome Back!"}</h2>
          <p>Realtime Collaborative Development</p>
        </div>

        {type === "REGISTER" && (
          <Profile
            onOpenAvatarPicker={onOpenAvatarPicker}
            onOpenImagePicker={onOpenImagePicker}
            onSelectImage={onSelectImage}
            picker={picker}
            image={image!}
          />
        )}

        <div className={styles.inputs}>
          {inputs.map((input, index) => {
            const error = errors[`${input.name as keyof typeof errors}`];
            const value = values[`${input.name as keyof typeof values}`];

            return (
              <Input
                key={index}
                {...input}
                value={value}
                error={!!error}
                onChange={onChange}
              />
            );
          })}
        </div>

        <Button
          label={type === "REGISTER" ? "Create Account" : "Login Account"}
          type="submit"
        />

        {type === "REGISTER" ? (
          <Link className={styles.toggle} to={"/login"}>
            Login To Your Account
          </Link>
        ) : (
          <Link className={styles.toggle} to={"/register"}>
            Create An Account
          </Link>
        )}

        <Error ref={errorRef} error={error} />
      </form>
    </div>
  );
}
