import { ChangeEvent } from "react";

export default function Input({
  type,
  icon,
  label,
  name,
  onChange,
  required = true,
}: IInput) {
  const className = "form-input";

  return (
    <div className={className}>
      <img className={`${className}-icon`} src={icon} />

      <input
        className={`${className}-field`}
        required={required ?? true}
        onChange={onChange}
        placeholder={label}
        name={name}
        type={type}
      />
    </div>
  );
}

interface IInput {
  icon: string;
  label: string;
  name: string;
  required?: boolean;
  type: "text" | "number" | "email" | "password";
  onChange: (event: ChangeEvent) => void;
}
