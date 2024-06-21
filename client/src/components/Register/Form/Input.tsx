import { ChangeEvent, HTMLInputTypeAttribute } from "react";

import styles from "./Input.module.scss";

export interface InputProps {
  icon: string;
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
  onChange: (event: ChangeEvent) => void;
}

export default function Input({
  type,
  icon,
  label,
  name,
  onChange,
}: InputProps) {
  return (
    <div className={styles.input}>
      <img src={icon} />
      <input
        onChange={onChange}
        placeholder={label}
        name={name}
        type={type}
        required
      />
    </div>
  );
}
