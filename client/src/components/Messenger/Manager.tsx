import { IManageable, IProject } from "../../interfaces/messenger/Manager";

import useManagerProvider from "../../hooks/messenger/useManagerProvider";
import useProjectProvider from "../../hooks/messenger/useProjectProvider";

import Navbar from "./Manager/Navbar";
import Form from "./Manager/Form";
import Project from "./Manager/Project";
import Objective from "./Manager/Objective";

export default function Manager({ room }: IManageable) {
  const { projects, state, mode, setState, setMode } = useManagerProvider(room);
  const { project, onSelectProject } = useProjectProvider();

  const handleSelectProject = (project: IProject) => {
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
