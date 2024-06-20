import { RefObject } from "react";

import Icon from "../../../images/register/image.svg";

interface ProfileProps {
  image: string;
  picker: RefObject<HTMLInputElement>;
  onSelectImage: () => void;
  onOpenImagePicker: () => void;
  onOpenAvatarPicker: () => void;
}

export default function Profile({
  image,
  picker,
  onSelectImage,
  onOpenImagePicker,
  onOpenAvatarPicker,
}: ProfileProps) {
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
