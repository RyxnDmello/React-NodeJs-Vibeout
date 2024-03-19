import io from "socket.io-client";
import { useEffect } from "react";

import Profiles from "./components/Profiles";
import Messages from "./components/Messages";
import Dashboard from "./components/Dashboard";

const socket = io("http://localhost:8080");

export default function App() {
  useEffect(() => {
    socket.on("connect", () => console.log("User Connected"));
    socket.on("disconnect", () => console.log("User Disconnected"));

    socket.emit("joinRoom", "123");
  }, []);

  return (
    <main>
      <Profiles />
      <Messages socket={socket} />
      <Dashboard />
    </main>
  );
}
