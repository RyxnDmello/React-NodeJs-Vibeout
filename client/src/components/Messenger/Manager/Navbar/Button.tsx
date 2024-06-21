import styles from "./Button.module.scss";

interface ButtonProps {
  label?: string;
  image: string;
  onClick: () => void;
}

export default function Button({ label, image, onClick }: ButtonProps) {
  return (
    <div className={styles.button} onClick={onClick}>
      <img src={image} />
      {label && <p>{label}</p>}
    </div>
  );
}
