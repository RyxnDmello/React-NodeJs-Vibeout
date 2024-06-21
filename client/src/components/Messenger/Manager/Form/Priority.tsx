import { Priority as _ } from "../../../../interfaces/Manager";

import styles from "./Priority.module.scss";

interface OptionProps {
  priority: _;
  selected: boolean;
  onSelect: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export default function Priority({
  priority,
  selected,
  onSelect,
}: OptionProps) {
  return (
    <input
      className={`${styles.priority} ${styles[priority.toLowerCase()]} ${
        selected && styles.selected
      }`}
      onClick={onSelect}
      value={priority}
      name="priority"
      type="radio"
    />
  );
}
