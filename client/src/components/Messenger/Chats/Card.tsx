import { Chat } from "../../../interfaces/Chat";

import Profile from "../../../images/chats/profile.png";

import styles from "./Card.module.scss";

interface CardProps extends Chat {
  selected: boolean;
  onSelectCard: (chat: Chat) => void;
}

export default function Card({
  room,
  email,
  username,
  selected,
  onSelectCard,
}: CardProps) {
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
      className={`${styles.wrapper} ${selected && styles.selected}`}
      onClick={onHandleSelectCard}
    >
      <div className={styles.card}>
        <img src={Profile} />

        <div>
          <h2>{username}</h2>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}
