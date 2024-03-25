import { useState, useEffect } from "react";

import { IMessageable, IMessage } from "../interfaces/Message";
import { getDate, getTime } from "../utils/DateTime";

import Sender from "../images/messages/sender.png";

import Bubble from "./Messages/Bubble";
import Controller from "./Messages/Controller";

export default function Messages({ chat, socket }: IMessageable) {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [text, setText] = useState<string>("");

  const onHandleSendMessage = () => {
    if (chat === undefined || text === "") return;

    const message: IMessage = {
      room: chat.room,
      email: chat.email,
      time: getTime(),
      text: text,
    };

    socket.emit("sendMessage", message);
    setMessages([...messages, message]);
    setText("");
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

        <h4 className={`${className}-header-name`}>
          {chat === undefined ? "Live Chat" : chat.username}
        </h4>
      </div>

      <div className={`${className}-bubbles-stream`}>
        <div className={`${className}-bubbles`}>
          {messages.length > 0 && (
            <p className={`${className}-bubbles-day`}>{getDate()}</p>
          )}

          {messages.map((value, i) => (
            <Bubble key={i} {...value} isSent={value.email === chat?.email} />
          ))}
        </div>
      </div>

      <Controller
        value={text}
        label="Message..."
        onSetText={setText}
        onSendMessage={onHandleSendMessage}
      />
    </section>
  );
}
