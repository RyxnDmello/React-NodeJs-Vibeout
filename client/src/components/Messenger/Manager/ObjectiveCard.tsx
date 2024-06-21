import axios from "axios";

import { Objective } from "../../../interfaces/Manager";

import Complete from "../../../images/manager/complete.svg";
import Delete from "../../../images/manager/delete.svg";

import Button from "./Objective/Button";

import styles from "./Objective.module.scss";

interface ObjectiveCardProps extends Objective {
  pid: string;
  room: string;
}

export default function ObjectiveCard({
  pid,
  oid,
  room,
  name,
  description,
  priority,
  completed,
}: ObjectiveCardProps) {
  const handleComplete = async () => {
    await axios.post("http://localhost:8080/objectives/complete", {
      pid: pid,
      oid: oid,
      room: room,
    });
  };

  const handleDelete = async () => {
    await axios.post("http://localhost:8080/objectives/delete", {
      pid: pid,
      oid: oid,
      room: room,
    });
  };

  return (
    <div className={`${styles.objective} ${completed && styles.completed}`}>
      <div className={styles.details}>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>

      <div className={styles.controller}>
        <div>
          {!completed && <Button icon={Complete} onClick={handleComplete} />}
          <Button icon={Delete} onClick={handleDelete} />
        </div>

        <div className={`${styles.bar} ${styles[priority]}`}></div>
      </div>
    </div>
  );
}
