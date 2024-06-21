import styles from "./Input.module.scss";

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ label, name, value, onChange }: InputProps) {
  return (
    <input
      className={styles.input}
      onChange={onChange}
      placeholder={label}
      value={value}
      name={name}
      type="text"
    />
  );
}
