export interface IChatable {
  room?: string;
  chats: IChat[];
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
