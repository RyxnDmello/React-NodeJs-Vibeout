import { IBubble } from "../../interfaces/Message";

export default function Bubble({ text, isSent }: IBubble) {
  const className = "messages-bubble";

  return (
    <div className={`${className}-wrapper ${isSent && "sent"}`}>
      <div className={className}>
        <p className={`${className}-text`}>{text}</p>
      </div>
    </div>
  );
}
