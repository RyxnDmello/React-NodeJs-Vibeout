import { Link } from "react-router-dom";

import useProfilePicker from "../../hooks/register/useProfilePicker";
import useRegister, { FormType } from "../../hooks/auth/useRegister";
import useLogin from "../../hooks/auth/useLogin";

import { registerInputs, loginInputs } from "../../models/Register";

import Profile from "./Form/Profile";
import Input from "./Form/Input";
import Button from "./Form/Button";
import Error from "./Form/Error";

import styles from "./Form.module.scss";

interface FormProps {
  type: FormType;
}

export default function Form({ type }: FormProps) {
  const {
    image,
    picker,
    onSelectImage,
    onOpenImagePicker,
    onOpenAvatarPicker,
  } = useProfilePicker();

  const {
    registerErrorRef,
    registerFormValues,
    registerFormErrors,
    registerResponseError,
    onRegisterSubmit,
    onRegisterChange,
  } = useRegister(image!);

  const {
    loginErrorRef,
    loginFormValues,
    loginFormErrors,
    loginResponseError,
    onLoginSubmit,
    onLoginChange,
  } = useLogin();

  return (
    <div className={styles.form}>
      <form onSubmit={type === "REGISTER" ? onRegisterSubmit : onLoginSubmit}>
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

        {type === "REGISTER" && (
          <div className={styles.inputs}>
            {registerInputs.map((input, i) => {
              const value =
                registerFormValues[
                  `${input.name as keyof typeof registerFormValues}`
                ];

              const error =
                registerFormErrors[
                  `${input.name as keyof typeof registerFormErrors}`
                ];

              return (
                <Input
                  key={i}
                  {...input}
                  value={value}
                  error={!!error}
                  onChange={onRegisterChange}
                />
              );
            })}
          </div>
        )}

        {type === "LOGIN" && (
          <div className={styles.inputs}>
            {loginInputs.map((input, i) => {
              const value =
                loginFormValues[
                  `${input.name as keyof typeof loginFormValues}`
                ];

              const error =
                loginFormErrors[
                  `${input.name as keyof typeof loginFormErrors}`
                ];

              return (
                <Input
                  key={i}
                  {...input}
                  value={value}
                  error={!!error}
                  onChange={onLoginChange}
                />
              );
            })}
          </div>
        )}

        <Button label="Create Account" type="submit" />

        <Link
          to={type === "REGISTER" ? "/login" : "/register"}
          className={styles.toggle}
        >
          {type === "REGISTER" ? "Login To Your Account" : "Create An Account"}
        </Link>

        {type === "REGISTER" && (
          <Error ref={registerErrorRef} message={registerResponseError} />
        )}

        {type === "LOGIN" && (
          <Error ref={loginErrorRef} message={loginResponseError} />
        )}
      </form>
    </div>
  );
}
