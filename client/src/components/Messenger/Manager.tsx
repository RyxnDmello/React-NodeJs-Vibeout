import { Project } from "../../interfaces/Manager";

import useManagerProvider from "../../hooks/messenger/useManagerProvider";
import useProjectProvider from "../../hooks/messenger/useProjectProvider";

import Navbar from "./Manager/Navbar";
import Form from "./Manager/Form";
import ProjectCard from "./Manager/ProjectCard";
import ObjectiveCard from "./Manager/ObjectiveCard";

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

  const className = "manager";

  return (
    <section id={className}>
      <div className={`${className}-wrapper`}>
        <div className={`${className}-header`}>
          <h4 className={`${className}-header-title`}>Manager</h4>
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
          <div className={`${className}-stream-wrapper ${mode.toLowerCase()}`}>
            <div className={`${className}-stream`}>
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
