import { useState, useEffect } from "react";
import { Socket } from "socket.io-client";

import { IMessage } from "../../interfaces/messenger/Message";
import { IChat } from "../../interfaces/messenger/Chat";

import { getTime } from "../../utils/DateTime";

export default function useMessagesProvider(
  chat: IChat | undefined,
  socket: Socket
) {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const onSendMessage = (text: string) => {
    if (chat === undefined || text === "") return;

    const message: IMessage = {
      room: chat.room,
      email: chat.email,
      time: getTime(),
      text: text,
    };

    socket.emit("sendMessage", message);
    setMessages([...messages, message]);
  };

  useEffect(() => {
    socket.on("messages", (message) => {
      setMessages([...messages, message]);
    });
  }, [socket, messages]);

  return { messages, onSendMessage };
}
