import { Project } from "../../../interfaces/Manager";

import useProgress from "../../../hooks/projects/useProgress";

import styles from "./Project.module.scss";

interface ProjectCardProps extends Project {
  onSelectProject: (project: Project) => void;
}

export default function ProjectCard({
  pid,
  name,
  about,
  priority,
  objectives,
  onSelectProject,
}: ProjectCardProps) {
  const { progressRef, percentage } = useProgress(objectives);

  const handleSelectProject = () => {
    onSelectProject({
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
      onClick={handleSelectProject}
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
