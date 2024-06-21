import useProfilePicker from "../../hooks/register/useProfilePicker";
import useRegister from "../../hooks/auth/useRegister";

import { inputs } from "../../models/Register";

import Profile from "./Form/Profile";
import Input from "./Form/Input";
import Button from "./Form/Button";

import styles from "./Form.module.scss";

export default function Form() {
  const {
    image,
    picker,
    onSelectImage,
    onOpenImagePicker,
    onOpenAvatarPicker,
  } = useProfilePicker();

  const { onSubmit, onChange } = useRegister(image!);

  return (
    <div className={styles.form}>
      <form onSubmit={onSubmit}>
        <div className={styles.header}>
          <h2>Create Account</h2>
          <p>Realtime Collaborative Development</p>
        </div>

        <Profile
          onOpenAvatarPicker={onOpenAvatarPicker}
          onOpenImagePicker={onOpenImagePicker}
          onSelectImage={onSelectImage}
          picker={picker}
          image={image!}
        />

        <div className={styles.inputs}>
          {inputs.map((input, i) => (
            <Input key={i} {...input} onChange={onChange} />
          ))}
        </div>

        <div className={styles.buttons}>
          <Button label="Create Account" />
        </div>
      </form>
    </div>
  );
}
