import { useState } from "react";

import { Project as _ } from "../../interfaces/Manager";

import useProjects from "../../hooks/projects/useProjects";

import Navbar from "./Manager/Navbar";
import Form from "./Manager/Form";
import Project from "./Manager/Project";
import Objective from "./Manager/Objective";

import styles from "./Manager.module.scss";

interface ManagerProps {
  room?: string;
}

export default function Manager({ room }: ManagerProps) {
  const { projects, state, mode, setState, setMode } = useProjects(room);
  const [project, setProject] = useState<_ | undefined>(undefined);

  const handleSetProject = (project: _) => {
    setState("OBJECTIVES");
    setProject(project);
  };

  return (
    <section id="manager" className={styles.manager}>
      <div>
        <div className={styles.header}>
          <h4>Manager</h4>
        </div>

        {room && (
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

        {room && state !== "DEFAULT" && (
          <div className={`${styles.stream} ${styles[mode.toLowerCase()]}`}>
            <div>
              {state === "OBJECTIVES" &&
                project?.objectives.map((objective) => (
                  <Objective
                    key={objective.oid}
                    room={room}
                    pid={project.pid}
                    {...objective}
                  />
                ))}

              {state === "PROJECTS" &&
                projects.map((project) => (
                  <Project
                    key={project.pid}
                    {...project}
                    onSelect={handleSetProject}
                  />
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
