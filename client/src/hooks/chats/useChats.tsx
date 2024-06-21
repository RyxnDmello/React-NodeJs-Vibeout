import { useState, useEffect } from "react";
import axios from "axios";

import { Chat } from "../../interfaces/Chat";

const _api: string = import.meta.env.PROD
  ? `${import.meta.env.VITE_SERVER_API}/api`
  : "/api";

export default function useChats() {
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    const requestChats = async () => {
      const response = await axios.get(`${_api}/chats`);
      setChats(response.data);
    };

    requestChats();
  }, []);

  return { chats };
}
