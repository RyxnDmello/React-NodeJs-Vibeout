import { ChangeEvent, RefObject } from "react";

export interface IInput {
  icon: string;
  label: string;
  name: string;
  required?: boolean;
  type: "text" | "number" | "email" | "password";
  onChange?: (event: ChangeEvent) => void;
}

export interface IProfile {
  image: string;
  picker: RefObject<HTMLInputElement>;
  onSelectImage: () => void;
  onOpenImagePicker: () => void;
  onOpenAvatarPicker: () => void;
}

export interface IButton {
  label: string;
}
