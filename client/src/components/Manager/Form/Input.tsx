export default function Input({ label, name, value }: IInput) {
  return (
    <input
      className="manager-form-input"
      placeholder={label}
      value={value}
      name={name}
      type="text"
    />
  );
}

interface IInput {
  label: string;
  name: string;
  value: string;
}
