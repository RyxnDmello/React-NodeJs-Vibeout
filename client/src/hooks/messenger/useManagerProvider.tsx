import { useState, useEffect } from "react";
import axios from "axios";

import { State, Mode } from "../../interfaces/Manager";
import { Project } from "../../interfaces/Manager";

const _api: string = import.meta.env.PROD
  ? `${import.meta.env.VITE_SERVER_API}/api`
  : "/api";

export default function useManagerProvider(room: string | undefined) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [state, setState] = useState<State>("PROJECTS");
  const [mode, setMode] = useState<Mode>("VIEWING");

  useEffect(() => {
    const requestProjects = async () => {
      if (room === undefined) return;

      const response = await axios.post(`${_api}/projects`, { room });

      setState(response.data.length === 0 ? "DEFAULT" : "PROJECTS");
      setMode(response.data.length === 0 ? "EDITING" : "VIEWING");

      setProjects(response.data);
    };

    requestProjects();
  }, [room]);

  return { projects, state, mode, setState, setMode };
}
