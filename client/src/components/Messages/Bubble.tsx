import { IBubble } from "../../interfaces/Message";

export default function Bubble({ text, time, isSent }: IBubble) {
  const className = "messages-bubble";

  return (
    <div className={`${className}-wrapper ${isSent && "sent"}`}>
      <div className={className}>
        <p className={`${className}-text`}>{text}</p>
        <p className={`${className}-time`}>{time}</p>
      </div>
    </div>
  );
}
