export default function Input({ label, name, value, onChange }: IInput) {
  return (
    <input
      className="manager-form-input"
      onChange={onChange}
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
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
