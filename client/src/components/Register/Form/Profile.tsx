import { RefObject } from "react";

import Icon from "../../../images/register/image.svg";

import styles from "./Profile.module.scss";

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
  return (
    <div className={styles.profile}>
      <img src={image} onClick={onOpenImagePicker} />
      <p onClick={onOpenAvatarPicker}>Avatars</p>
      <img src={Icon} />
      <input
        onChange={onSelectImage}
        accept="image/*"
        ref={picker}
        type="file"
      />
    </div>
  );
}
