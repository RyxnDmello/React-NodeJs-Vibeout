import { useFormik } from "formik";
import axios from "axios";

import { IProject, State } from "../../interfaces/messenger/Manager";
import {
  IManagerSchema,
  ManagerValidation,
} from "../../interfaces/messenger/Schema";

export default function useManagerForm(
  room: string,
  project: IProject,
  state: State
) {
  const initialValues: IManagerSchema = {
    name: "",
    description: "",
    priority: undefined,
  };

  const { values, handleSubmit, handleChange } = useFormik<IManagerSchema>({
    initialValues: initialValues,
    validationSchema: ManagerValidation,
    onSubmit: async () => {
      state === "PROJECTS" ? await _onCreateProject() : await _onAddObjective();
    },
  });

  const _onCreateProject = async () => {
    await axios.post("http://localhost:8080/projects/create", {
      room: room,
      project: values,
    });
  };

  const _onAddObjective = async () => {
    await axios.post("http://localhost:8080/objectives/add", {
      room: room,
      project: project,
      objective: values,
    });
  };

  return { values, onSubmit: handleSubmit, onChange: handleChange };
}
