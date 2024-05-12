import { inputs } from "../../models/register/Form";

import useProfilePicker from "../../hooks/Register/useProfilePicker";

import Input from "./Form/Input";
import Button from "./Form/Button";
import Profile from "./Form/Profile";

export default function Form() {
  const {
    image,
    picker,
    onSelectImage,
    onOpenImagePicker,
    onOpenAvatarPicker,
  } = useProfilePicker();

  const className = "form";

  return (
    <div className={`${className}-wrapper`}>
      <form className={className}>
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
            <Input key={i} {...input} onChange={() => {}} />
          ))}
        </div>

        <div className={`${className}-buttons`}>
          <Button label="Create Account" />
        </div>
      </form>
    </div>
  );
}
