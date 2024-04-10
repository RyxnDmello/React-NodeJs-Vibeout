import { Priority } from "../../../interfaces/Manager";

export default function Option({ priority, isSelected, onSelect }: IOption) {
  const className = "manager-form-priority-option";

  return (
    <div
      className={`${className} ${priority} ${isSelected && "selected"}`}
      onClick={() => onSelect(priority)}
    />
  );
}

interface IOption {
  priority: Priority;
  isSelected: boolean;
  onSelect: (priority: Priority) => void;
}
