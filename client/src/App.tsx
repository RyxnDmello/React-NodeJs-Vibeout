import { useState, useEffect } from "react";
import io from "socket.io-client";

import { IChat } from "./interfaces/Chat";

import Chats from "./components/Chats";
import Messages from "./components/Messages";
import Manager from "./components/Manager";

const socket = io("http://localhost:8080");

export default function App() {
  const [chats, setChats] = useState<IChat[]>([]);
  const [chat, setChat] = useState<IChat | undefined>();

  const onSelectChat = (chat: IChat) => {
    socket.emit("joinRoom", chat.room);
    setChat(chat);
  };

  useEffect(() => {
    socket.on("chats", (chats) => setChats(chats));
  }, []);

  return (
    <main>
      <Chats room={chat?.room} chats={chats} onSelectChat={onSelectChat} />
      <Messages chat={chat} socket={socket} />
      <Manager />
    </main>
  );
}
