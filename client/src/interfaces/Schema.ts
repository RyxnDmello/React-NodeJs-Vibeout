import { IObjective, Priority } from "./Manager";
import * as yup from "yup";

export interface IProjectSchema {
  id: string;
  name: string;
  about: string;
  priority?: Priority;
  objectives: IObjective[];
}

export const ProjectValidation: yup.AnyObject = yup.object().shape({
  name: yup.string().required("Invalid Name"),
  about: yup.string().required("Invalid Description"),
  priority: yup.string().required("Select Priority"),
});
