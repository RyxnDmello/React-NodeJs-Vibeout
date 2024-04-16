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
  completed: boolean;
}

export interface INavbar {
  state: State;
  mode: Mode;
  onSwitchState: (state: State) => void;
  onSwitchMode: (state: Mode) => void;
}

export interface IForm {
  mode: Mode;
  state: State;
  room: string;
  project: IProject;
}

export type Priority = "high" | "medium" | "low";
export type State = "DEFAULT" | "PROJECTS" | "OBJECTIVES";
export type Mode = "VIEWING" | "EDITING";
