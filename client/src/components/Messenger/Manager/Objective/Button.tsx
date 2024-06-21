import styles from "./Button.module.scss";

interface ButtonProps {
  icon: string;
  onClick: () => void;
}

export default function Button({ icon, onClick }: ButtonProps) {
  return (
    <div className={styles.button} onClick={onClick}>
      <img src={icon} />
    </div>
  );
}
