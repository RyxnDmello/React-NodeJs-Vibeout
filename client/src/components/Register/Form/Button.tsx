import Icon from "../../../images/buttons/arrow.svg";

import styles from "./Button.module.scss";

interface ButtonProps {
  type: "submit" | "reset";
  label: string;
}

export default function Button({ type, label }: ButtonProps) {
  return (
    <button className={styles.button} type={type}>
      <p>{label}</p>
      <img src={Icon} />
    </button>
  );
}
