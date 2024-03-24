import { ICard } from "../../interfaces/Chat";

import Profile from "../../images/chats/profile.png";

export default function Card({
  room,
  email,
  username,
  isSelected,
  onSelectCard,
}: ICard) {
  const className = "chats-card";

  const onHandleSelectChat = () => {
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
      onClick={onHandleSelectChat}
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
