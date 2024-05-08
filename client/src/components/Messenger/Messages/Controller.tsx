import { useRef } from "react";

import Send from "../../../images/buttons/send.svg";

import { IController } from "../../../interfaces/messenger/Message";

export default function Input({ label, onSendMessage }: IController) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = () => {
    onSendMessage(inputRef.current!.value);
    inputRef.current!.value = "";
  };

  const className = "messages-controller";

  return (
    <div className={`${className}-wrapper`}>
      <div className={className}>
        <input
          ref={inputRef}
          className={`${className}-input`}
          placeholder={label}
          autoCorrect="false"
          autoComplete="off"
          name="message"
          type="text"
        />

        <div className={`${className}-icon`} onClick={handleSendMessage}>
          <img className={`${className}-icon-image`} src={Send} />
        </div>
      </div>
    </div>
  );
}