import Send from "../../../images/buttons/send.svg";

import { IController } from "../../../interfaces/messenger/Message";

export default function Input({
  value,
  label,
  onSetText,
  onSendMessage,
}: IController) {
  const className = "messages-controller";

  return (
    <div className={`${className}-wrapper`}>
      <div className={className}>
        <input
          onChange={(event) => onSetText(event.target.value)}
          className={`${className}-input`}
          placeholder={label}
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
