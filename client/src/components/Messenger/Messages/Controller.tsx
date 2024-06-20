import { useRef } from "react";

import Send from "../../../images/buttons/send.svg";

interface ControllerProps {
  label: string;
  onSendMessage: (text: string) => void;
}

export default function Input({ label, onSendMessage }: ControllerProps) {
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
