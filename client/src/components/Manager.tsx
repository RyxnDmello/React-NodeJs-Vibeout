import { useEffect, useState } from "react";
import axios from "axios";

import { State, IManageable, IProject } from "../interfaces/Manager";

import Navbar from "./Manager/Navbar";
import Form from "./Manager/Form";
import Project from "./Manager/Project";

export default function Manager({ room }: IManageable) {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [project, setProject] = useState<IProject | undefined>(undefined);
  const [state, setState] = useState<State>("PROJECTS");

  const handleSelectProject = (project: IProject | undefined) => {
    setState("OBJECTIVES");
    setProject(project);
  };

  useEffect(() => {
    const requestProjects = async () => {
      if (room === undefined) return;

      const response = await axios.post("http://localhost:8080/projects", {
        room: room,
      });

      setState(response.data.length === 0 ? "DEFAULT" : "PROJECTS");
      setProjects(response.data);
    };

    requestProjects();
  }, [room]);

  const className = "manager";

  return (
    <section id={className}>
      <div className={`${className}-wrapper`}>
        <div className={`${className}-header`}>
          <h4 className={`${className}-header-title`}>Manager</h4>
        </div>

        {room && projects.length > 0 && (
          <Navbar state={state} onSwitchState={setState} />
        )}

        {room && state !== "PROJECTS" && (
          <Form room={room!} project={project!} state={state} />
        )}

        {room && state === "PROJECTS" && (
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
