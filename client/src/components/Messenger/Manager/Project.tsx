import { Project as _ } from "../../../interfaces/Manager";

import useProgress from "../../../hooks/projects/useProgress";

import styles from "./Project.module.scss";

interface ProjectProps extends _ {
  onSelect: (project: _) => void;
}

export default function Project({
  pid,
  name,
  about,
  priority,
  objectives,
  onSelect,
}: ProjectProps) {
  const { progressRef, percentage } = useProgress(objectives);

  const handleSelect = () => {
    onSelect({
      pid,
      name,
      about,
      objectives,
      priority,
    });
  };

  return (
    <div
      className={`${styles.project} ${styles[priority]}`}
      onClick={handleSelect}
    >
      <div className={styles.details}>
        <h4>{name}</h4>
        <p>{about}</p>
      </div>

      <div className={styles.progress}>
        <div ref={progressRef}></div>
        <p>{percentage.toFixed()}%</p>
      </div>
    </div>
  );
}
