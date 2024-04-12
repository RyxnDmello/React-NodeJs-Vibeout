import { useState } from "react";
import { useFormik, FormikValues } from "formik";
import { v4 as unique } from "uuid";

import { IForm, Priority } from "../../interfaces/Manager";
import { IProjectSchema, ProjectValidation } from "../../interfaces/Schema";

import Input from "./Form/Input";
import Option from "./Form/Option";

export default function Form({ room, project, state }: IForm) {
  const [priority, setPriority] = useState<Priority | undefined>(undefined);

  const initialValues: IProjectSchema = {
    id: "",
    name: "",
    about: "",
    priority: undefined,
    objectives: [],
  };

  const { values, errors, handleSubmit, handleChange } =
    useFormik<FormikValues>({
      initialValues: initialValues,
      validationSchema: ProjectValidation,
      validate: () => {
        console.log(errors);
      },
      onSubmit: (values: FormikValues) => {
        values.id = unique();
        console.log(values);
      },
    });

  const className = "manager-form";

  return (
    <form className={className} onSubmit={handleSubmit}>
      {state === "DEFAULT" && (
        <h4 className={`${className}-title`}>Create A Project</h4>
      )}

      <div className={`${className}-inputs`}>
        <Input
          onChange={handleChange}
          value={values.name}
          label="Name"
          name="name"
        />

        {state === "DEFAULT" && (
          <Input
            onChange={handleChange}
            value={values.about}
            label="About"
            name="about"
          />
        )}

        {state === "OBJECTIVES" && (
          <Input
            value={values.description}
            onChange={handleChange}
            label="Description"
            name="description"
          />
        )}
      </div>

      <div className={`${className}-priority`}>
        <div className={`${className}-priority-title`}>Priority</div>

        <div className={`${className}-priority-options`}>
          <Option
            isSelected={priority === "high"}
            onSelect={handleChange}
            priority="high"
          />

          <Option
            isSelected={priority === "medium"}
            onSelect={handleChange}
            priority="medium"
          />

          <Option
            isSelected={priority === "low"}
            onSelect={handleChange}
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
