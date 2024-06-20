import { Chat } from "../../../interfaces/Chat";

import Profile from "../../../images/chats/profile.png";

interface CardProps extends Chat {
  isSelected: boolean;
  onSelectCard: (chat: Chat) => void;
}

export default function Card({
  room,
  email,
  username,
  isSelected,
  onSelectCard,
}: CardProps) {
  const className = "chats-card";

  const onHandleSelectCard = () => {
    onSelectCard({
      room: room,
      email: email,
      image: Profile,
      username: username,
    });
  };

  return (
    <div
      className={`${className}-wrapper ${isSelected && "selected"}`}
      onClick={onHandleSelectCard}
    >
      <div className={className}>
        <img className={`${className}-icon`} src={Profile} />

        <div className={`${className}-details`}>
          <h2 className={`${className}-name`}>{username}</h2>
          <p className={`${className}-email`}>{email}</p>
        </div>
      </div>
    </div>
  );
}
