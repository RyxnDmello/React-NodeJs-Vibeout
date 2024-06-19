import { IProfile } from "../../../interfaces/register/Form";

import Icon from "../../../images/register/image.svg";

export default function Profile({
  image,
  picker,
  onSelectImage,
  onOpenImagePicker,
  onOpenAvatarPicker,
}: IProfile) {
  const className = "form-profile";

  return (
    <div className={className}>
      <img
        className={`${className}-image`}
        onClick={onOpenImagePicker}
        src={image}
      />

      <p className={`${className}-button`} onClick={onOpenAvatarPicker}>
        Avatars
      </p>

      <img className={`${className}-icon`} src={Icon} />

      <input
        className={`${className}-hidden`}
        onChange={onSelectImage}
        accept="image/*"
        ref={picker}
        type="file"
      />
    </div>
  );
}
