import { IChatable } from "../../interfaces/messenger/Chat";

import useChatsProvider from "../../hooks/messenger/useChatsProvider";
import useChatsFilter from "../../hooks/messenger/useChatsFilter";

import Logo from "../Common/Logo";
import Card from "./Chats/Card";

export default function Chats({ room, onSelectChat }: IChatable) {
  const { filter, onFilterChats } = useChatsFilter();
  const { chats } = useChatsProvider();

  const className = "chats";

  return (
    <section id={className}>
      <div className={`${className}-wrapper`}>
        <div className={`${className}-header`}>
          <Logo />
        </div>

        <form className={`${className}-search`} action="/search" method="post">
          <input
            onChange={(event) => onFilterChats(chats, event.target.value)}
            className={`${className}-search-bar`}
            placeholder="Search"
            name="search"
            type="text"
          />
        </form>

        <div className={`${className}-cards-wrapper`}>
          <div className={`${className}-cards`}>
            {(filter.length === 0 ? chats : filter).map((chat) => (
              <Card
                {...chat}
                key={chat.room}
                isSelected={chat.room === room}
                onSelectCard={onSelectChat}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
