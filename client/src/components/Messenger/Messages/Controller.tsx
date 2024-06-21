import { useRef } from "react";

import Send from "../../../images/buttons/send.svg";

import styles from "./Controller.module.scss";

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

  return (
    <div className={styles.wrapper}>
      <div className={styles.controller}>
        <input
          ref={inputRef}
          placeholder={label}
          autoCorrect="false"
          autoComplete="off"
          name="message"
          type="text"
        />

        <div onClick={handleSendMessage}>
          <img src={Send} />
        </div>
      </div>
    </div>
  );
}
