import Send from "../../images/buttons/send.svg";

export default function Input({
  value,
  placeholder,
  onSetMessage,
  onSendMessage,
}: IInput) {
  const className = "message-controller";

  return (
    <div className={`${className}-wrapper`}>
      <div className={className}>
        <input
          onChange={(event) => onSetMessage(event.target.value)}
          className={`${className}-input`}
          placeholder={placeholder}
          autoCorrect="false"
          autoComplete="off"
          name="message"
          value={value}
          type="text"
        />

        <div className={`${className}-icon`} onClick={onSendMessage}>
          <img className={`${className}-icon-image`} src={Send} />
        </div>
      </div>
    </div>
  );
}

interface IInput {
  value: string;
  placeholder: string;
  onSetMessage: (message: string) => void;
  onSendMessage: () => void;
}
