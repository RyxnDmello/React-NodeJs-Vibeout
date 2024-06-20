import * as yup from "yup";

import { Priority } from "../interfaces/Manager";

export interface ManagerSchema {
  name: string;
  description: string;
  priority?: Priority;
}

export const ValidationSchema: yup.AnyObject = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  priority: yup.string().required(),
});
