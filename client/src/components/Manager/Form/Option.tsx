import { Priority } from "../../../interfaces/Manager";

export default function Option({ priority, isSelected, onSelect }: IOption) {
  const className = "manager-form-priority-option";

  return (
    <input
      className={`${className} ${priority} ${isSelected && "selected"}`}
      onClick={onSelect}
      value={priority}
      name="priority"
      type="radio"
    />
  );
}

interface IOption {
  priority: Priority;
  isSelected: boolean;
  onSelect: (event: React.MouseEvent<HTMLInputElement>) => void;
}
