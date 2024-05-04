import { useState } from "react";

import { IForm, Priority } from "../../../interfaces/messenger/Manager";

import useManagerForm from "../../../hooks/messenger/useManagerForm";

import Input from "./Form/Input";
import Option from "./Form/Option";

export default function Form({ room, project, state, mode }: IForm) {
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
              isSelected={priority === "high"}
              onSelect={handleSetPriority}
              priority="high"
            />

            <Option
              isSelected={priority === "medium"}
              onSelect={handleSetPriority}
              priority="medium"
            />

            <Option
              isSelected={priority === "low"}
              onSelect={handleSetPriority}
              priority="low"
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
