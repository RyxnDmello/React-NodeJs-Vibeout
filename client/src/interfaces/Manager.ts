export interface IManageable {
  room?: string;
}

export interface IProject {
  id: string;
  name: string;
  about: string;
  objectives: IObjective[];
  priority: "high" | "medium" | "low";
}

export interface IObjective {
  id: string;
  name: string;
  description: string;
  isCompleted: boolean;
  priority: "high" | "medium" | "low";
}

export enum State {
  CREATE,
  PROJECTS,
  OBJECTIVES,
}
