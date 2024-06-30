import { Objective as _ } from "../../../interfaces/Manager";

import CompleteIcon from "../../../images/manager/complete.svg";
import DeleteIcon from "../../../images/manager/delete.svg";

import useObjective from "../../../hooks/projects/useObjective";

import Button from "./Objective/Button";

import styles from "./Objective.module.scss";

interface ObjectiveProps extends _ {
  pid: string;
  room: string;
}

export default function Objective({
  pid,
  oid,
  room,
  name,
  description,
  priority,
  completed,
}: ObjectiveProps) {
  const { onComplete, onDelete } = useObjective(pid, oid, room);

  return (
    <div className={`${styles.objective} ${completed && styles.completed}`}>
      <div className={styles.details}>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>

      <div className={styles.controller}>
        <div>
          {!completed && <Button icon={CompleteIcon} onClick={onComplete} />}
          <Button icon={DeleteIcon} onClick={onDelete} />
        </div>

        <div className={`${styles.bar} ${styles[priority]}`}></div>
      </div>
    </div>
  );
}
