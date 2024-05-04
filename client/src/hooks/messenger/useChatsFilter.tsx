import { useState } from "react";

import { IChat } from "../../interfaces/messenger/Chat";

export default function useChatsFilter() {
  const [filter, setFilter] = useState<IChat[]>([]);

  const onFilterChats = (chats: IChat[], prompt: string) => {
    const filter: IChat[] = chats.filter((chat) =>
      chat.username.toLowerCase().startsWith(prompt.toLowerCase())
    );

    setFilter(filter);
  };

  return { filter, onFilterChats };
}
