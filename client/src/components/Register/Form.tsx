import { Link } from "react-router-dom";

import useProfilePicker from "../../hooks/register/useProfilePicker";
import useRegister, { FormType } from "../../hooks/auth/useRegister";
import useLogin from "../../hooks/auth/useLogin";

import { registerInputs, loginInputs } from "../../models/Register";

import Profile from "./Form/Profile";
import Input from "./Form/Input";
import Button from "./Form/Button";

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

  const { onRegisterSubmit, onRegisterChange } = useRegister(image!);
  const { onLoginSubmit, onLoginChange } = useLogin();

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
            {registerInputs.map((input, i) => (
              <Input key={i} {...input} onChange={onRegisterChange} />
            ))}
          </div>
        )}

        {type === "LOGIN" && (
          <div className={styles.inputs}>
            {loginInputs.map((input, i) => (
              <Input key={i} {...input} onChange={onLoginChange} />
            ))}
          </div>
        )}

        <div className={styles.buttons}>
          <Button label="Create Account" type="submit" />
        </div>

        <Link
          to={type === "REGISTER" ? "/login" : "/register"}
          className={styles.toggle}
        >
          {type === "REGISTER" ? "Login To Your Account" : "Create An Account"}
        </Link>
      </form>
    </div>
  );
}
