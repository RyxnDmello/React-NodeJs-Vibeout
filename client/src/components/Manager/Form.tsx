import { useState } from "react";

import { IForm, Priority } from "../../interfaces/Manager";

import Input from "./Form/Input";
import Option from "./Form/Option";

export default function Form({ room, project, state }: IForm) {
  const [priority, setPriority] = useState<Priority | undefined>(undefined);

  const handleSetPriority = (priority: Priority) => setPriority(priority);

  const handleSubmit = () => {
    setPriority("medium");
    console.log(room);
    console.log(project);
  };

  const className = "manager-form";

  return (
    <form className={className} onSubmit={() => handleSubmit()}>
      {state === "DEFAULT" && (
        <h4 className={`${className}-title`}>Create A Project</h4>
      )}

      <div className={`${className}-inputs`}>
        <Input label="Name" name="name" value={undefined!} />

        {state === "DEFAULT" && (
          <Input label="About" name="about" value={undefined!} />
        )}

        {state === "OBJECTIVES" && (
          <Input label="Description" name="description" value={undefined!} />
        )}
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
          Add {state === "DEFAULT" ? "Project" : "Objective"}
        </p>
      </button>
    </form>
  );
}
