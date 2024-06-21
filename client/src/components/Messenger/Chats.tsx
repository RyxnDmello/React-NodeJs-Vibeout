import { Chat } from "../../interfaces/Chat";

import useChats from "../../hooks/chats/useChats";
import useFilterChats from "../../hooks/chats/useFilterChats";

import Logo from "../Common/Logo";
import Card from "./Chats/Card";

import styles from "./Chats.module.scss";

interface ChatsProps {
  room?: string;
  onSelectChat: (chat: Chat) => void;
}

export default function Chats({ room, onSelectChat }: ChatsProps) {
  const { filter, onFilterChats } = useFilterChats();
  const { chats } = useChats();

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
