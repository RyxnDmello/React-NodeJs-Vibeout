import { useState, useEffect } from "react";
import axios from "axios";

import { IChat } from "../../interfaces/messenger/Chat";

const _api: string = import.meta.env.PROD
  ? `${import.meta.env.VITE_SERVER_API}/api`
  : "/api";

export default function useChatsProvider() {
  const [chats, setChats] = useState<IChat[]>([]);

  useEffect(() => {
    const requestChats = async () => {
      const response = await axios.get(`${_api}/chats`);
      setChats(response.data);
    };

    requestChats();
  }, []);

  return { chats };
}
