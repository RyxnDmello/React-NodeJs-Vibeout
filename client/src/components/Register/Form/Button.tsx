import Icon from "../../../images/buttons/arrow.svg";

import styles from "./Button.module.scss";

interface ButtonProps {
  label: string;
}

export default function Button({ label }: ButtonProps) {
  return (
    <button className={styles.button} type="submit">
      <p>{label}</p>
      <img src={Icon} />
    </button>
  );
}
