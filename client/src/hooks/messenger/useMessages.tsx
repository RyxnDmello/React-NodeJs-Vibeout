import { useState, useEffect } from "react";
import { Socket } from "socket.io-client";

import { Chat } from "../../interfaces/Chat";
import { Message } from "../../interfaces/Message";

import { getTime } from "../../utils/DateTime";

export default function useMessages(socket: Socket, chat: Chat | undefined) {
  const [messages, setMessages] = useState<Message[]>([]);

  const onSendMessage = (text: string) => {
    if (chat === undefined || text.trim().length === 0) return;

    const message: Message = {
      room: chat.room,
      email: chat.email,
      time: getTime(),
      text: text.trim(),
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
