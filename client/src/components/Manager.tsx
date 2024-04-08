import { useEffect, useState } from "react";
import axios from "axios";

import { IManageable, IProject, State } from "../interfaces/Manager";

import Project from "./Manager/Project";
import Form from "./Manager/Form";

export default function Manager({ room }: IManageable) {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [project, setProject] = useState<IProject | undefined>(undefined);
  const [state, setState] = useState<State>(State.PROJECTS);

  const handleSelectProject = (project: IProject | undefined) => {
    console.log(project);

    setProject(project);
  };

  useEffect(() => {
    const requestProjects = async () => {
      if (room === undefined) return;

      const response = await axios.post("http://localhost:8080/projects", {
        room: room,
      });

      setState(response.data.length === 0 ? State.CREATE : State.PROJECTS);
      setProjects(response.data);
    };

    requestProjects();
  }, [room]);

  const className = "manager";

  return (
    <section id={className}>
      <div className={`${className}-wrapper`}>
        <div className={`${className}-header`}>
          <h4
            className={`${className}-header-title`}
            onClick={() => setState(State.CREATE)}
          >
            Manager
          </h4>
        </div>

        {room && state !== State.PROJECTS && (
          <Form room={room!} project={project!} state={state} />
        )}

        {room && state === State.PROJECTS && (
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
        )}
      </div>
    </section>
  );
}
