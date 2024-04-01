import { Socket } from "socket.io-client";

export interface IChatable {
  room?: string;
  socket: Socket;
  onSelectChat: (chat: IChat) => void;
}

export interface IChat {
  room: string;
  image: string;
  email: string;
  username: string;
}

export interface ICard extends IChat {
  isSelected: boolean;
  onSelectCard: (chat: IChat) => void;
}
