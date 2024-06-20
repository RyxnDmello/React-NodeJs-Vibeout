import { useFormik } from "formik";
import axios from "axios";

import { IProject, State } from "../../interfaces/messenger/Manager";
import { ManagerSchema, ValidationSchema } from "../../schema/ManagerSchema";

const _api: string = import.meta.env.PROD
  ? `${import.meta.env.VITE_SERVER_API}/api`
  : "/api";

export default function useManagerForm(
  room: string,
  project: IProject,
  state: State
) {
  const initialValues: ManagerSchema = {
    name: "",
    description: "",
    priority: undefined,
  };

  const { values, handleSubmit, handleChange } = useFormik<ManagerSchema>({
    initialValues: initialValues,
    validationSchema: ValidationSchema,
    onSubmit: async () => {
      state === "PROJECTS" ? await _onCreateProject() : await _onAddObjective();
    },
  });

  const _onCreateProject = async () => {
    await axios.post(`${_api}/projects/create`, {
      room: room,
      project: values,
    });
  };

  const _onAddObjective = async () => {
    await axios.post(`${_api}/objectives/add`, {
      room: room,
      project: project,
      objective: values,
    });
  };

  return { values, onSubmit: handleSubmit, onChange: handleChange };
}
