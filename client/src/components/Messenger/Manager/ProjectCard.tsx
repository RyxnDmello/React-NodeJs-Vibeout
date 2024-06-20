import { useState, useEffect, useRef } from "react";

import { Project } from "../../../interfaces/Manager";

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

  const className = "manager-project";

  return (
    <div className={`${className} ${priority}`} onClick={handleSelectProject}>
      <div className={`${className}-details`}>
        <h4 className={`${className}-name`}>{name}</h4>
        <p className={`${className}-about`}>{about}</p>
      </div>

      <div className={`${className}-progress`}>
        <div ref={progress} className={`${className}-progress-bar`}></div>

        <div className={`${className}-progress-value`}>
          {percentage.toFixed()}%
        </div>
      </div>
    </div>
  );
}
