import { FormEvent, useRef } from "react";

import { ManagerState, IProject } from "../../interfaces/Manager";

export default function Form({ room, project, state }: IForm) {
  const name = useRef<HTMLInputElement>(null);
  const about = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);

  const handleCreateProject = (event: FormEvent) => {
    event.preventDefault();

    console.log(room);
    console.log(name.current?.value);
    console.log(about.current?.value);
  };

  const handleAddObjective = (event: FormEvent) => {
    event.preventDefault();

    console.log(project?.id);
    console.log(name.current?.value);
    console.log(about.current?.value);
  };

  const className = "manager-form";

  return (
    <form
      className={className}
      onSubmit={state === "PROJECTS" ? handleCreateProject : handleAddObjective}
    >
      {state === "DEFAULT" && (
        <h4 className={`${className}-title`}>Create A Project</h4>
      )}

      <div className={`${className}-inputs`}>
        <input
          className={`${className}-input`}
          value={name.current?.value}
          placeholder="Name"
          ref={name}
          name="name"
          type="text"
        />

        {state === "DEFAULT" && (
          <input
            className={`${className}-input`}
            value={about.current?.value}
            placeholder="About"
            name="about"
            ref={about}
            type="text"
          />
        )}

        {state === "OBJECTIVES" && (
          <textarea
            className={`${className}-input`}
            value={description.current?.value}
            placeholder="Description"
            name="description"
            ref={description}
            rows={3}
          />
        )}
      </div>

      <div className={`${className}-priorities`}>
        <div className={`${className}-priorities high`}></div>
        <div className={`${className}-priorities medium`}></div>
        <div className={`${className}-priorities low`}></div>
      </div>

      <button className={`${className}-button`} type="submit">
        <p className={`${className}-button-label`}>
          Add {state === "DEFAULT" ? "Project" : "Objective"}
        </p>
      </button>
    </form>
  );
}

interface IForm {
  room: string;
  project: IProject;
  state: ManagerState;
}
