import { IMessageable } from "../../interfaces/messenger/Message";
import { getDate } from "../../utils/DateTime";

import useMessagesProvider from "../../hooks/messenger/useMessagesProvider";

import Sender from "../../images/messages/sender.png";

import Bubble from "./Messages/Bubble";
import Controller from "./Messages/Controller";
import Profile from "./Messages/Profile";

export default function Messages({ chat, socket }: IMessageable) {
  const { messages, onSendMessage } = useMessagesProvider(chat, socket);

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

      <Controller label="Message..." onSendMessage={onSendMessage} />
    </section>
  );
}