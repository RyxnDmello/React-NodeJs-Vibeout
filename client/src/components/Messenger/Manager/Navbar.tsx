import { Mode, State } from "../../../interfaces/Manager";

import Explore from "../../../images/manager/explore.svg";
import Edit from "../../../images/manager/editing.svg";

import Button from "./Navbar/Button";

interface NavbarProps {
  state: State;
  mode: Mode;
  onSwitchState: (state: State) => void;
  onSwitchMode: (state: Mode) => void;
}

export default function Navbar({
  state,
  mode,
  onSwitchState,
  onSwitchMode,
}: NavbarProps) {
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
      {state === "PROJECTS" && (
        <h4 className={`${className}-title`}>Projects</h4>
      )}

      {state === "OBJECTIVES" && (
        <Button
          image={Explore}
          label="Explore Projects"
          onClick={handleSwitchState}
        />
      )}

      {state !== "DEFAULT" && (
        <Button image={Edit} onClick={handleSwitchMode} />
      )}
    </nav>
  );
}
