import useRoom from "../hooks/messenger/useRoom";

import Chats from "../components/Messenger/Chats";
import Messages from "../components/Messenger/Messages";
import Manager from "../components/Messenger/Manager";

import "../styles/messenger.css";

export default function App() {
  const { socket, chat, onSelectChat } = useRoom();

  return (
    <main>
      <Chats room={chat?.room} onSelectChat={onSelectChat} />
      <Messages chat={chat} socket={socket} />
      <Manager room={chat?.room} />
    </main>
  );
}
