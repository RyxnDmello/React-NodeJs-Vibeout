import { useState } from "react";

import { Mode, State, Priority, IProject } from "../../../interfaces/Manager";

import useManagerForm from "../../../hooks/messenger/useManagerForm";

import Input from "./Form/Input";
import Option from "./Form/Option";

interface FormProps {
  mode: Mode;
  state: State;
  room: string;
  project: IProject;
}

export default function Form({ room, project, state, mode }: FormProps) {
  const { values, onSubmit, onChange } = useManagerForm(room, project, state);
  const [priority, setPriority] = useState<Priority | undefined>(undefined);

  const handleSetPriority = (event: React.MouseEvent<HTMLInputElement>) => {
    setPriority(event.currentTarget.value as Priority);
    onChange(event);
  };

  const className = "manager-form";

  return (
    <div className={`${className}-wrapper ${mode.toLocaleLowerCase()}`}>
      <form className={className} onSubmit={onSubmit}>
        {state === "DEFAULT" && (
          <h4 className={`${className}-title`}>Create A Project</h4>
        )}

        <div className={`${className}-inputs`}>
          <Input
            onChange={onChange}
            value={values.name}
            label="Name"
            name="name"
          />

          <Input
            onChange={onChange}
            value={values.description}
            label="Description"
            name="description"
          />
        </div>

        <div className={`${className}-priority`}>
          <div className={`${className}-priority-title`}>Priority</div>

          <div className={`${className}-priority-options`}>
            <Option
              active={priority === "high"}
              onSelect={handleSetPriority}
              priority="HIGH"
            />

            <Option
              active={priority === "medium"}
              onSelect={handleSetPriority}
              priority="MEDIUM"
            />

            <Option
              active={priority === "low"}
              onSelect={handleSetPriority}
              priority="LOW"
            />
          </div>
        </div>

        <button className={`${className}-button`} type="submit">
          <p className={`${className}-button-label`}>
            Add {state === "PROJECTS" ? "Project" : "Objective"}
          </p>
        </button>
      </form>
    </div>
  );
}
