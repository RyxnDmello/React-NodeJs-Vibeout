import { useState, useEffect } from "react";
import axios from "axios";

import { State, Mode } from "../../interfaces/messenger/Manager";
import { IProject } from "../../interfaces/messenger/Manager";

export default function useManagerProvider(room: string | undefined) {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [state, setState] = useState<State>("PROJECTS");
  const [mode, setMode] = useState<Mode>("VIEWING");

  useEffect(() => {
    const requestProjects = async () => {
      if (room === undefined) return;

      const response = await axios.post("http://localhost:8080/projects", {
        room: room,
      });

      setState(response.data.length === 0 ? "DEFAULT" : "PROJECTS");
      setMode(response.data.length === 0 ? "EDITING" : "VIEWING");

      setProjects(response.data);
    };

    requestProjects();
  }, [room]);

  return { projects, state, mode, setState, setMode };
}
