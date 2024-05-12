import { useState, useRef } from "react";

import avatar from "../../images/register/avatar.png";

export default function useProfilePicker() {
  const [image, setImage] = useState<string | undefined>(avatar);
  const picker = useRef<HTMLInputElement>(null);

  const onOpenImagePicker = () => picker.current?.click();
  const onOpenAvatarPicker = () => {};

  const onSelectImage = () => {
    setImage(URL.createObjectURL(picker.current!.files![0]));
  };

  const onSelectAvatar = () => {
    setImage(image);
  };

  return {
    image,
    picker,
    onSelectImage,
    onSelectAvatar,
    onOpenImagePicker,
    onOpenAvatarPicker,
  };
}
