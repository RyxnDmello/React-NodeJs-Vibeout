export interface IManageable {
  room?: string;
}

export interface IProject {
  id: string;
  name: string;
  about: string;
  objectives: IObjective[];
  priority: Priority;
}

export interface IObjective {
  id: string;
  name: string;
  description: string;
  isCompleted: boolean;
  priority: Priority;
}

export type Priority = "high" | "medium" | "low";
export type ManagerState = "DEFAULT" | "PROJECTS" | "OBJECTIVES";
