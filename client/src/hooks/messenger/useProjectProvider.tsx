import { useState } from "react";

import { Project } from "../../interfaces/Manager";

export default function useProjectProvider() {
  const [project, setProject] = useState<Project | undefined>(undefined);

  const onSelectProject = (project: Project | undefined) => {
    setProject(project);
  };

  return { project, onSelectProject };
}
