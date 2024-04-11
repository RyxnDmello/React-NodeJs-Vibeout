export interface IManageable {
  room?: string;
}

export interface IProject {
  id: string;
  name: string;
  about: string;
  priority: Priority;
  objectives: IObjective[];
}

export interface IObjective {
  id: string;
  name: string;
  description: string;
  priority: Priority;
  isCompleted: boolean;
}

export interface INavbar {
  state: State;
  onSwitchState: (state: State) => void;
}

export interface IForm {
  state: State;
  room: string;
  project: IProject;
}

export type Priority = "high" | "medium" | "low";
export type State = "DEFAULT" | "PROJECTS" | "OBJECTIVES";
