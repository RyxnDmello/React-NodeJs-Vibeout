import { useState } from "react";

import { IProject } from "../../interfaces/messenger/Manager";

export default function useProjectProvider() {
  const [project, setProject] = useState<IProject | undefined>(undefined);

  const onSelectProject = (project: IProject | undefined) => {
    setProject(project);
  };

  return { project, onSelectProject };
}
