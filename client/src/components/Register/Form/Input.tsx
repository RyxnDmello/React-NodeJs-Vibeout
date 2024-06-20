import { ChangeEvent, HTMLInputTypeAttribute } from "react";

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
  const className = "form-input";

  return (
    <div className={className}>
      <img className={`${className}-icon`} src={icon} />

      <input
        className={`${className}-field`}
        onChange={onChange}
        placeholder={label}
        name={name}
        type={type}
        required
      />
    </div>
  );
}
