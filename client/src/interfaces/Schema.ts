import { Priority } from "./Manager";
import * as yup from "yup";

export interface IManagerSchema {
  name: string;
  description: string;
  priority?: Priority;
}

export const ManagerValidation: yup.AnyObject = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  priority: yup.string().required(),
});
