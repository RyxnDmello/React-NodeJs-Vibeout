import { useState, useEffect, useRef } from "react";

import { Project } from "../../../interfaces/Manager";

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
  const [percentage, setPercentage] = useState<number>(0);
  const progress = useRef<HTMLDivElement>(null);

  const handleSelectProject = () => {
    onSelectProject({
      pid,
      name,
      about,
      objectives,
      priority,
    });
  };

  useEffect(() => {
    const completed: number = objectives.filter(
      (objective) => objective.completed
    ).length;

    setPercentage(
      objectives.length === 0 ? 0 : (completed / objectives.length) * 100
    );

    progress.current!.style.setProperty("--fill", `${percentage}%`);
  }, [objectives, percentage]);

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
        <div ref={progress}></div>
        <p>{percentage.toFixed()}%</p>
      </div>
    </div>
  );
}
