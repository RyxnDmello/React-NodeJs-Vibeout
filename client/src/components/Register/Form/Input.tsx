import { IInput } from "../../../interfaces/register/Form";

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
