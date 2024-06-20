export interface Project {
  pid: string;
  name: string;
  about: string;
  priority: Priority;
  objectives: Objective[];
}

export interface Objective {
  oid: string;
  name: string;
  description: string;
  priority: Priority;
  completed: boolean;
}

export type Priority = "HIGH" | "MEDIUM" | "LOW";
export type State = "DEFAULT" | "PROJECTS" | "OBJECTIVES";
export type Mode = "VIEWING" | "EDITING";
