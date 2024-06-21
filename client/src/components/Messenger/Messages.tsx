import { Socket } from "socket.io-client";

import Sender from "../../images/messages/sender.png";

import { getDate } from "../../utils/DateTime";

import { Chat } from "../../interfaces/Chat";

import useMessages from "../../hooks/messenger/useMessages";

import Profile from "./Messages/Profile";
import Bubble from "./Messages/Bubble";
import Controller from "./Messages/Controller";

import styles from "./Messages.module.scss";

interface MessagesProps {
  chat?: Chat;
  socket: Socket;
}

export default function Messages({ chat, socket }: MessagesProps) {
  const { messages, onSendMessage } = useMessages(socket, chat);

  return (
    <section className={styles.messages}>
      <div className={styles.header}>
        {chat ? (
          <Profile
            image={Sender}
            username={chat?.username}
            email={chat?.email}
          />
        ) : (
          <h4>Live Chat</h4>
        )}
      </div>

      <div className={styles.stream}>
        <div className={styles.bubbles}>
          {messages.length > 0 && <p>{getDate()}</p>}

          {messages.map((message, i) => (
            <Bubble key={i} {...message} sent={message.email === chat?.email} />
          ))}
        </div>
      </div>

      <Controller label="Message..." onSendMessage={onSendMessage} />
    </section>
  );
}
