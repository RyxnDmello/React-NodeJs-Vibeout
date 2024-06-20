import { Priority } from "../../../../interfaces/Manager";

interface OptionProps {
  priority: Priority;
  selected: boolean;
  onSelect: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export default function Option({ priority, selected, onSelect }: OptionProps) {
  const className = "manager-form-priority-option";

  return (
    <input
      className={`${className} ${priority} ${selected && "selected"}`}
      onClick={onSelect}
      value={priority}
      name="priority"
      type="radio"
    />
  );
}
