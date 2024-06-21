import styles from "./Bubble.module.scss";

interface BubbleProps {
  text: string;
  time: string;
  sent: boolean;
}

export default function Bubble({ text, time, sent }: BubbleProps) {
  return (
    <div className={`${styles.bubble} ${sent && styles.sent}`}>
      <div>
        <p>{text}</p>
        <p>{time}</p>
      </div>
    </div>
  );
}
