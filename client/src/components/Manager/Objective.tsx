import { IObjective } from "../../interfaces/Manager";

import Complete from "../../images/manager/complete.svg";
import Delete from "../../images/manager/delete.svg";

import Button from "./Objective/Button";

export default function Objective({ name, description, priority }: IObjective) {
  const className = "manager-objective";

  return (
    <form className={className}>
      <div className={`${className}-details`}>
        <h4 className={`${className}-name`}>{name}</h4>
        <p className={`${className}-description`}>{description}</p>
      </div>

      <div className={`${className}-controller`}>
        <div className={`${className}-buttons`}>
          <Button icon={Complete} action="complete" />
          <Button icon={Delete} action="delete" />
        </div>

        <div className={`${className}-priority ${priority}`}></div>
      </div>
    </form>
  );
}
