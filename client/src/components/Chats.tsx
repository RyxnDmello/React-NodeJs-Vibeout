import { useState, useEffect } from "react";
import axios from "axios";

import { IChatable, IChat } from "../interfaces/Chat";

import Logo from "./Common/Logo";
import Card from "./Chats/Card";

export default function Chats({ room, onSelectChat }: IChatable) {
  const [chats, setChats] = useState<IChat[]>([]);
  const [filter, setFilter] = useState<IChat[]>([]);

  const handleFilterChats = (prompt: string) => {
    const filter: IChat[] = chats.filter((chat) =>
      chat.username.toLowerCase().startsWith(prompt.toLowerCase())
    );

    setFilter(filter);
  };

  useEffect(() => {
    const requestChats = async () => {
      const response = await axios.get("http://localhost:8080/chats");
      setChats(response.data);
    };

    requestChats();
  }, []);

  const className = "chats";

  return (
    <section id={className}>
      <div className={`${className}-wrapper`}>
        <div className={`${className}-header`}>
          <Logo />
        </div>

        <form className={`${className}-search`} action="/search" method="post">
          <input
            onChange={(event) => handleFilterChats(event.target.value)}
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
