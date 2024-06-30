import { Navigate } from "react-router-dom";

import useAuthContext from "../hooks/auth/useAuthContext";
import useRoom from "../hooks/messenger/useRoom";

import Chats from "../components/Messenger/Chats";
import Messages from "../components/Messenger/Messages";
import Manager from "../components/Messenger/Manager";

import "../styles/messenger.scss";

export default function Messenger() {
  const { account } = useAuthContext();
  const { socket, chat, onSelectChat } = useRoom();

  if (account === null) {
    return <Navigate to={"/login"} replace />;
  }

  return (
    <main>
      <Chats room={chat?.room} onSelectChat={onSelectChat} />
      <Messages chat={chat} socket={socket} />
      <Manager room={chat?.room} />
    </main>
  );
}
