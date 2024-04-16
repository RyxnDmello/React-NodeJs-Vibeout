import { INavbar } from "../../interfaces/Manager";

import Create from "../../images/manager/create.svg";
import Explore from "../../images/manager/explore.svg";

import Button from "./Navbar/Button";

export default function Navbar({
  state,
  mode,
  onSwitchState,
  onSwitchMode,
}: INavbar) {
  const className = "manager-navbar";

  const handleSwitchState = () => {
    onSwitchState(state === "PROJECTS" ? "OBJECTIVES" : "PROJECTS");
    onSwitchMode("VIEWING");
  };

  const handleSwitchMode = () => {
    onSwitchMode(mode === "VIEWING" ? "EDITING" : "VIEWING");
  };

  return (
    <nav className={className}>
      {state !== "PROJECTS" && (
        <Button
          onClick={handleSwitchState}
          label="Explore Projects"
          image={Explore}
        />
      )}

      {state === "PROJECTS" && (
        <Button
          onClick={handleSwitchState}
          label="Create A Project"
          image={Create}
        />
      )}

      <Button onClick={handleSwitchMode} image={Create} label="Edit" />
    </nav>
  );
}
