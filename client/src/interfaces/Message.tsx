import { Socket } from "socket.io-client";

import { IChat } from "./Chat";

export interface IMessageable {
  chat?: IChat;
  socket: Socket;
}

export interface IMessage {
  room?: string;
  email?: string;
  text: string;
  date: string;
}

export interface IBubble {
  text: string;
  isSent: boolean;
}

export interface IController {
  value: string;
  label: string;
  onSetText: (text: string) => void;
  onSendMessage: () => void;
}
