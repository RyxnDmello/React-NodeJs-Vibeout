interface BubbleProps {
  text: string;
  time: string;
  isSent: boolean;
}

export default function Bubble({ text, time, isSent }: BubbleProps) {
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
