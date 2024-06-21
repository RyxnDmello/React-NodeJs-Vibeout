import { Chat } from "../../interfaces/Chat";

import useChatsProvider from "../../hooks/messenger/useChatsProvider";
import useChatsFilter from "../../hooks/messenger/useChatsFilter";

import Logo from "../Common/Logo";
import Card from "./Chats/Card";

import styles from "./Chats.module.scss";

interface ChatsProps {
  room?: string;
  onSelectChat: (chat: Chat) => void;
}

export default function Chats({ room, onSelectChat }: ChatsProps) {
  const { filter, onFilterChats } = useChatsFilter();
  const { chats } = useChatsProvider();

  return (
    <section className={styles.chats}>
      <div>
        <div className={styles.header}>
          <Logo />
        </div>

        <form className={styles.search} action="/search" method="post">
          <input
            onChange={(event) => onFilterChats(chats, event.target.value)}
            placeholder="Search"
            name="search"
            type="text"
          />
        </form>

        <div className={styles.cards}>
          <div>
            {(filter.length === 0 ? chats : filter).map((chat) => (
              <Card
                {...chat}
                key={chat.room}
                selected={chat.room === room}
                onSelectCard={onSelectChat}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
