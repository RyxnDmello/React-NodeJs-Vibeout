import { useState } from "react";

import {
  Project,
  Mode,
  State,
  Priority as P,
} from "../../../interfaces/Manager";

import useManagerForm from "../../../hooks/messenger/useManagerForm";

import Input from "./Form/Input";
import Priority from "./Form/Priority";

import styles from "./Form.module.scss";

interface FormProps {
  mode: Mode;
  state: State;
  room: string;
  project: Project;
}

export default function Form({ room, project, state, mode }: FormProps) {
  const { values, onSubmit, onChange } = useManagerForm(room, project, state);
  const [priority, setPriority] = useState<P | undefined>(undefined);

  const handleSetPriority = (event: React.MouseEvent<HTMLInputElement>) => {
    setPriority(event.currentTarget.value as P);
    onChange(event);
  };

  return (
    <div className={`${styles.wrapper} ${styles[mode.toLocaleLowerCase()]}`}>
      <form className={styles.form} onSubmit={onSubmit}>
        {state === "DEFAULT" && <h4>Create A Project</h4>}

        <div className={styles.inputs}>
          <Input
            onChange={onChange}
            value={values.name}
            label="Name"
            name="name"
          />

          <Input
            onChange={onChange}
            value={values.description}
            label="Description"
            name="description"
          />
        </div>

        <div className={styles.priorities}>
          <p>Priority</p>

          <div>
            <Priority
              selected={priority === "HIGH"}
              onSelect={handleSetPriority}
              priority="HIGH"
            />

            <Priority
              selected={priority === "MEDIUM"}
              onSelect={handleSetPriority}
              priority="MEDIUM"
            />

            <Priority
              selected={priority === "LOW"}
              onSelect={handleSetPriority}
              priority="LOW"
            />
          </div>
        </div>

        <button className={styles.button} type="submit">
          <p>Add {state === "PROJECTS" ? "Project" : "Objective"}</p>
        </button>
      </form>
    </div>
  );
}
