import { Priority } from "../../../../interfaces/Manager";

interface OptionProps {
  priority: Priority;
  active: boolean;
  onSelect: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export default function Option({ priority, active, onSelect }: OptionProps) {
  const className = "manager-form-priority-option";

  return (
    <input
      className={`${className} ${priority} ${active && "selected"}`}
      onClick={onSelect}
      value={priority}
      name="priority"
      type="radio"
    />
  );
}
