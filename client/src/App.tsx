import { useState } from "react";
import io from "socket.io-client";

import { IChat } from "./interfaces/Chat";

import Chats from "./components/Chats";
import Messages from "./components/Messages";
import Manager from "./components/Manager";

const socket = io("http://localhost:8080");

export default function App() {
  const [chat, setChat] = useState<IChat | undefined>();

  const onSelectChat = (chat: IChat) => {
    socket.emit("room", chat.room);
    setChat(chat);
  };

  return (
    <main>
      <Chats room={chat?.room} socket={socket} onSelectChat={onSelectChat} />
      <Messages chat={chat} socket={socket} />
      <Manager />
    </main>
  );
}
