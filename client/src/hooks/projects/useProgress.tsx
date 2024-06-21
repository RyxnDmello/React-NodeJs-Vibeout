import { useState, useEffect, useRef } from "react";

import { Objective } from "../../interfaces/Manager";

export default function useProgress(objectives: Objective[]) {
  const [percentage, setPercentage] = useState<number>(0);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const completed: number = objectives.filter(
      (objective) => objective.completed
    ).length;

    setPercentage(
      objectives.length !== 0 ? (completed / objectives.length) * 100 : 0
    );

    progressRef.current!.style.setProperty("--fill", `${percentage}%`);
  }, [objectives, percentage]);

  return { progressRef, percentage };
}
