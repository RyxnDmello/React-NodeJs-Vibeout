import { Project } from "../../interfaces/Manager";

import useManagerProvider from "../../hooks/messenger/useManagerProvider";
import useProjectProvider from "../../hooks/messenger/useProjectProvider";

import Navbar from "./Manager/Navbar";
import Form from "./Manager/Form";
import ProjectCard from "./Manager/ProjectCard";
import ObjectiveCard from "./Manager/ObjectiveCard";

import styles from "./Manager.module.scss";

interface ManagerProps {
  room?: string;
}

export default function Manager({ room }: ManagerProps) {
  const { projects, state, mode, setState, setMode } = useManagerProvider(room);
  const { project, onSelectProject } = useProjectProvider();

  const handleSelectProject = (project: Project) => {
    setState("OBJECTIVES");
    onSelectProject(project);
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
                  <ObjectiveCard
                    key={objective.oid}
                    room={room}
                    pid={project.pid}
                    {...objective}
                  />
                ))}

              {state === "PROJECTS" &&
                projects.map((project) => (
                  <ProjectCard
                    key={project.pid}
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
