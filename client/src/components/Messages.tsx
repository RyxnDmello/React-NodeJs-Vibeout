import { useState, useEffect } from "react";
import { Socket } from "socket.io-client";

import Sender from "../images/messages/sender.png";

import Bubble from "./Messages/Bubble";
import Controller from "./Messages/Controller";

export default function Messages({ socket }: { socket: Socket }) {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, onHandleSetMessage] = useState<string>("");

  const onHandleSendMessage = () => {
    if (message === "") return;

    socket.emit("sendMessage", message);
    setMessages([...messages, message]);
    onHandleSetMessage("");
  };

  useEffect(() => {
    socket.on("messages", (message) => {
      setMessages([...messages, message]);
    });
  }, [socket, messages]);

  const className = "messages";

  return (
    <section id={className}>
      <div className={`${className}-header`}>
        <img className={`${className}-header-icon`} src={Sender} />
        <h4 className={`${className}-header-name`}>Sydney Sweeny</h4>
      </div>

      <div className={`${className}-bubbles-stream`}>
        <div className={`${className}-bubbles`}>
          {messages.map((value, i) => (
            <Bubble key={i} message={value} isSent />
          ))}
        </div>
      </div>

      <Controller
        value={message}
        placeholder="Message..."
        onSetMessage={onHandleSetMessage}
        onSendMessage={onHandleSendMessage}
      />
    </section>
  );
}
