import { ManagerState } from "../../interfaces/Manager";

import Create from "../../images/manager/create.svg";
import Explore from "../../images/manager/explore.svg";

import Button from "./Navbar/Button";

export default function Navbar({ state, onSwitchState: onSetState }: INavbar) {
  const className = "manager-navbar";

  const handleSwitchState = () => {
    if (state === "PROJECTS") {
      onSetState("DEFAULT");
      return;
    }

    onSetState("PROJECTS");
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
    </nav>
  );
}

interface INavbar {
  state: ManagerState;
  onSwitchState: (state: ManagerState) => void;
}
