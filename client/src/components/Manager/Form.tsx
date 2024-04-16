import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";

import { IForm, Priority } from "../../interfaces/Manager";
import { IManagerSchema, ManagerValidation } from "../../interfaces/Schema";

import Input from "./Form/Input";
import Option from "./Form/Option";

export default function Form({ room, project, state, mode }: IForm) {
  const [priority, setPriority] = useState<Priority | undefined>(undefined);

  const handleSetPriority = (event: React.MouseEvent<HTMLInputElement>) => {
    setPriority(event.currentTarget.value as Priority);
    handleChange(event);
  };

  const initialValues: IManagerSchema = {
    name: "",
    description: "",
    priority: undefined,
  };

  const { values, handleSubmit, handleChange } = useFormik<IManagerSchema>({
    initialValues: initialValues,
    validationSchema: ManagerValidation,
    onSubmit: async () => {
      state === "PROJECTS"
        ? await handleCreateProject()
        : await handleAddObjective();
    },
  });

  const handleCreateProject = async () => {
    await axios.post("http://localhost:8080/projects/create", {
      room: room,
      project: values,
    });
  };

  const handleAddObjective = async () => {
    await axios.post("http://localhost:8080/objectives/add", {
      room: room,
      project: project,
      objective: values,
    });
  };

  const className = "manager-form";

  return (
    <div className={`${className}-wrapper ${mode.toLocaleLowerCase()}`}>
      <form className={className} onSubmit={handleSubmit}>
        <h4 className={`${className}-title`}>
          {state === "PROJECTS" ? "Create A Project" : "Add Objective"}
        </h4>

        <div className={`${className}-inputs`}>
          <Input
            onChange={handleChange}
            value={values.name}
            label="Name"
            name="name"
          />

          <Input
            onChange={handleChange}
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
