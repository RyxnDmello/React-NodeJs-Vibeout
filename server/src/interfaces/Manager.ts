export interface IRoom {
  room: string;
  projects: IProject[];
}

export interface IProject {
  pid: string;
  name: string;
  about: string;
  objectives: IObjective[];
  priority: "high" | "medium" | "low";
}

export interface IObjective {
  oid: string;
  name: string;
  description: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
}
