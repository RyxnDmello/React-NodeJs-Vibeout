import { useState } from "react";

import { IChatable, IChat } from "../interfaces/Chat";

import Logo from "./Common/Logo";
import Card from "./Chats/Card";

export default function Chats({ room, chats, onSelectChat }: IChatable) {
  const [filter, setFilter] = useState<IChat[] | undefined>(undefined);

  const onHandleFilterChats = (prompt: string) => {
    const filter: IChat[] = chats.filter((chat) =>
      chat.username.startsWith(prompt)
    );

    setFilter(filter.length === 0 ? undefined : filter);
  };

  const className = "chats";

  return (
    <section id={className}>
      <div className={`${className}-wrapper`}>
        <div className={`${className}-header`}>
          <Logo />
        </div>

        <form className={`${className}-search`} action="/search" method="post">
          <input
            onChange={(event) => onHandleFilterChats(event.target.value)}
            className={`${className}-search-bar`}
            placeholder="Search"
            name="search"
            type="text"
          />
        </form>

        <div className={`${className}-cards-wrapper`}>
          <div className={`${className}-cards`}>
            {(filter ?? chats).map((chat) => (
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
