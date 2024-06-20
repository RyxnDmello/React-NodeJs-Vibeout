import { useState } from "react";
import io from "socket.io-client";

import { Chat } from "../interfaces/Chat";

const socket = io(import.meta.env.VITE_SERVER_API);

export default function useRoom() {
  const [chat, setChat] = useState<Chat | undefined>();

  const onSelectChat = (chat: Chat) => {
    socket.emit("room", chat.room);
    setChat(chat);
  };

  return { socket, chat, onSelectChat };
}
