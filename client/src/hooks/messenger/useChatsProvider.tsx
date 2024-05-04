import { useState, useEffect } from "react";
import axios from "axios";

import { IChat } from "../../interfaces/messenger/Chat";

export default function useChatsProvider() {
  const [chats, setChats] = useState<IChat[]>([]);

  useEffect(() => {
    const requestChats = async () => {
      const response = await axios.get("http://localhost:8080/chats");
      setChats(response.data);
    };

    requestChats();
  }, []);

  return { chats };
}
