import { ICard } from "../../../interfaces/messenger/Chat";

import Profile from "../../../images/chats/profile.png";

export default function Card({
  room,
  email,
  username,
  isSelected,
  onSelectCard,
}: ICard) {
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
