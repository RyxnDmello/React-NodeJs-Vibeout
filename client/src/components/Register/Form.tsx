import useProfilePicker from "../../hooks/register/useProfilePicker";
import useRegisterForm from "../../hooks/register/useRegisterForm";

import { inputs } from "../../models/Register";

import Profile from "./Form/Profile";
import Input from "./Form/Input";
import Button from "./Form/Button";

export default function Form() {
  const {
    image,
    picker,
    onSelectImage,
    onOpenImagePicker,
    onOpenAvatarPicker,
  } = useProfilePicker();

  const { onSubmit, onChange } = useRegisterForm(image!);

  const className = "form";

  return (
    <div className={`${className}-wrapper`}>
      <form className={className} onSubmit={onSubmit}>
        <div className={`${className}-header`}>
          <h2 className={`${className}-title`}>Create Account</h2>

          <p className={`${className}-headline`}>
            Realtime Collaborative Development
          </p>
        </div>

        <Profile
          onOpenAvatarPicker={onOpenAvatarPicker}
          onOpenImagePicker={onOpenImagePicker}
          onSelectImage={onSelectImage}
          picker={picker}
          image={image!}
        />

        <div className={`${className}-inputs`}>
          {inputs.map((input, i) => (
            <Input key={i} {...input} onChange={onChange} />
          ))}
        </div>

        <div className={`${className}-buttons`}>
          <Button label="Create Account" />
        </div>
      </form>
    </div>
  );
}
