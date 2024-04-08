import { FormEvent, useRef } from "react";

import { IProject, State } from "../../interfaces/Manager";

import Clear from "../../images/buttons/clear.svg";

export default function Form({
  room,
  project,
  state = State.CREATE,
}: IForm) {
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
      onSubmit={
        state === State.CREATE ? handleCreateProject : handleAddObjective
      }
    >
      {state === State.CREATE && (
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

        {state === State.CREATE && (
          <input
            className={`${className}-input`}
            value={about.current?.value}
            placeholder="About"
            name="about"
            ref={about}
            type="text"
          />
        )}

        {state === State.OBJECTIVES && (
          <textarea
            className={`${className}-input`}
            value={description.current?.value}
            placeholder="Description"
            ref={description}
            name="about"
            rows={3}
          ></textarea>
        )}
      </div>

      <div className={`${className}-priorities`}>
        <div className={`${className}-priorities high`}></div>
        <div className={`${className}-priorities medium`}></div>
        <div className={`${className}-priorities low`}></div>
      </div>

      <div className={`${className}-buttons`}>
        <button className={`${className}-button`} type="submit">
          <p className={`${className}-button-label`}>
            Add {state === State.CREATE ? "Project" : "Objective"}
          </p>
        </button>

        <button className={`${className}-button`} type="reset">
          <img className={`${className}-button-icon`} src={Clear} />
        </button>
      </div>

      <hr className={`${className}-divider`} />
    </form>
  );
}

interface IForm {
  room: string;
  project: IProject;
  state?: State;
}
