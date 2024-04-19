import { useState, useEffect } from "react";

import { IMessageable, IMessage } from "../../interfaces/messenger/Message";
import { getDate, getTime } from "../../utils/DateTime";

import Sender from "../../images/messages/sender.png";

import Bubble from "./Messages/Bubble";
import Controller from "./Messages/Controller";
import Profile from "./Messages/Profile";

export default function Messages({ chat, socket }: IMessageable) {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [text, setText] = useState<string>("");

  const handleSendMessage = () => {
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
        {chat ? (
          <Profile
            image={Sender}
            username={chat?.username}
            email={chat?.email}
          />
        ) : (
          <h4 className={`${className}-header-title`}>Live Chat</h4>
        )}
      </div>

      <div className={`${className}-bubbles-stream`}>
        <div className={`${className}-bubbles`}>
          {messages.length > 0 && (
            <p className={`${className}-bubbles-date`}>{getDate()}</p>
          )}

          {messages.map((message, i) => (
            <Bubble
              key={i}
              {...message}
              isSent={message.email === chat?.email}
            />
          ))}
        </div>
      </div>

      <Controller
        value={text}
        label="Message..."
        onSetText={setText}
        onSendMessage={handleSendMessage}
      />
    </section>
  );
}
