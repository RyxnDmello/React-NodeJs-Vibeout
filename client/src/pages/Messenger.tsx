import { useState } from "react";
import io from "socket.io-client";

import { IChat } from "../interfaces/messenger/Chat";

import Chats from "../components/Messenger/Chats";
import Messages from "../components/Messenger/Messages";
import Manager from "../components/Messenger/Manager";

import "../css/messenger.css";

const socket = io("http://localhost:8080");

export default function App() {
  const [chat, setChat] = useState<IChat | undefined>();

  const onSelectChat = (chat: IChat) => {
    socket.emit("room", chat.room);
    setChat(chat);
  };

  return (
    <main>
      <Chats room={chat?.room} onSelectChat={onSelectChat} />
      <Messages chat={chat} socket={socket} />
      <Manager room={chat?.room} />
    </main>
  );
}
