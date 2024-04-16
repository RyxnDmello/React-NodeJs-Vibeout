import { useEffect, useState } from "react";
import axios from "axios";

import { State, Mode, IManageable, IProject } from "../interfaces/Manager";

import Navbar from "./Manager/Navbar";
import Form from "./Manager/Form";
import Project from "./Manager/Project";
import Objective from "./Manager/Objective";

export default function Manager({ room }: IManageable) {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [project, setProject] = useState<IProject | undefined>(undefined);
  const [state, setState] = useState<State>("PROJECTS");
  const [mode, setMode] = useState<Mode>("VIEWING");

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

      response.data.length === 0 && setState("DEFAULT");
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
          <Navbar
            mode={mode}
            state={state}
            onSwitchMode={setMode}
            onSwitchState={setState}
          />
        )}

        {room && (
          <Form room={room!} project={project!} state={state} mode={mode} />
        )}

        {room && (
          <div className={`${className}-stream-wrapper ${mode.toLowerCase()}`}>
            <div className={`${className}-stream`}>
              {state === "OBJECTIVES" &&
                Array.from({ length: 10 }, (_, i) => (
                  <Objective
                    key={i}
                    id={`${i}`}
                    name="Develop Server"
                    description="Implement Express.js Implement Express.js Implement Express.js Implement Express.jsImplement Express.js"
                    completed={true}
                    priority={i % 2 === 0 ? "high" : "medium"}
                  />
                ))}

              {state === "PROJECTS" &&
                projects.map((project, i) => (
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
