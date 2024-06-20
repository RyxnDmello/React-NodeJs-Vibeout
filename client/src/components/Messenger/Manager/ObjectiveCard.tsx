import axios from "axios";

import { Objective } from "../../../interfaces/Manager";

import Complete from "../../../images/manager/complete.svg";
import Delete from "../../../images/manager/delete.svg";

import Button from "./Objective/Button";

interface ObjectiveCardProps extends Objective {
  pid: string;
  room: string;
}

export default function ObjectiveCard({
  pid,
  oid,
  room,
  name,
  description,
  priority,
  completed,
}: ObjectiveCardProps) {
  const handleComplete = async () => {
    await axios.post("http://localhost:8080/objectives/complete", {
      pid: pid,
      oid: oid,
      room: room,
    });
  };

  const handleDelete = async () => {
    await axios.post("http://localhost:8080/objectives/delete", {
      pid: pid,
      oid: oid,
      room: room,
    });
  };

  const className = "manager-objective";

  return (
    <div className={`${className} ${completed && "completed"}`}>
      <div className={`${className}-details`}>
        <h4 className={`${className}-name`}>{name}</h4>
        <p className={`${className}-description`}>{description}</p>
      </div>

      <div className={`${className}-controller`}>
        <div className={`${className}-buttons`}>
          {!completed && <Button icon={Complete} onClick={handleComplete} />}
          <Button icon={Delete} onClick={handleDelete} />
        </div>

        <div className={`${className}-priority ${priority}`}></div>
      </div>
    </div>
  );
}
