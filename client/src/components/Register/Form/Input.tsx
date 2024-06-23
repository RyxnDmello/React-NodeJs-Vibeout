import { ChangeEvent, HTMLInputTypeAttribute } from "react";

import styles from "./Input.module.scss";

export interface InputProps {
  icon: string;
  label: string;
  name: string;
  error: boolean;
  value: string | number;
  type: HTMLInputTypeAttribute;
  onChange: (event: ChangeEvent) => void;
}

export default function Input({
  type,
  icon,
  label,
  name,
  value,
  error,
  onChange,
}: InputProps) {
  return (
    <div className={styles.input}>
      <img src={icon} />
      <input
        className={`${error && styles.error}`}
        onChange={onChange}
        placeholder={label}
        value={value}
        name={name}
        type={type}
        required
      />
    </div>
  );
}
