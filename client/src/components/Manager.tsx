import { useState } from "react";

import { IProject } from "../interfaces/Manager";

import CreateIcon from "../images/buttons/create.svg";

import Project from "./Manager/Project";

export default function Manager() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [project, setProject] = useState<IProject | undefined>(undefined);

  const handleSelectProject = (project: IProject | undefined) => {
    setProject(project);
  };

  const className = "manager";

  return (
    <section id={className}>
      <div className={`${className}-wrapper`}>
        <div className={`${className}-header`}>
          <h4 className={`${className}-header-title`}>Manager</h4>
        </div>
      </div>

      <div className={`${className}-controller`}>
        <input
          className={`${className}-input`}
          placeholder="Project"
          type="text"
        />

        <div className={`${className}-button`}>
          <img className={`${className}-button-icon`} src={CreateIcon} />
        </div>
      </div>

      <div className={`${className}-projects-wrapper`}>
        <div className={`${className}-projects`}>
          {projects.map((project, i) => (
            <Project
              key={i}
              {...project}
              onSelectProject={handleSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
