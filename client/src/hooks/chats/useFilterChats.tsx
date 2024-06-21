import { useState } from "react";

import { Chat } from "../../interfaces/Chat";

export default function useFilterChats() {
  const [filter, setFilter] = useState<Chat[]>([]);

  const onFilterChats = (chats: Chat[], prompt: string) => {
    const filter: Chat[] = chats.filter((chat) =>
      chat.username.toLowerCase().startsWith(prompt.toLowerCase())
    );

    setFilter(filter);
  };

  return { filter, onFilterChats };
}
