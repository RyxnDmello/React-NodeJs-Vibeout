export default function Bubble({ message, isSent }: IBubble) {
  const className = "message-bubble";

  return (
    <div className={`${className}-wrapper ${isSent && "sent"}`}>
      <div className={className}>
        <p className="message-bubble-text">{message}</p>
      </div>
    </div>
  );
}

interface IBubble {
  message: string;
  isSent: boolean;
}
