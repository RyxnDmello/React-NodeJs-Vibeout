import { Socket } from "socket.io-client";

import { IChat } from "./Chat";

export interface IMessageable {
  chat?: IChat;
  socket: Socket;
}

export interface IProfile {
  image: string;
  email: string;
  username: string;
}

export interface IMessage {
  room?: string;
  email?: string;
  text: string;
  time: string;
}

export interface IBubble {
  text: string;
  time: string;
  isSent: boolean;
}

export interface IController {
  label: string;
  onSendMessage: (text: string) => void;
}
