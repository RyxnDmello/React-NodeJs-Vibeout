import Icon from "../../images/logo.png";

import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src={Icon} />
      <p>Vibeout</p>
    </div>
  );
}
