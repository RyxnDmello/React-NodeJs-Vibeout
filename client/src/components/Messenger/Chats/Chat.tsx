import { Chat as _ } from "../../../interfaces/Chat";

import Profile from "../../../images/chats/profile.png";

import styles from "./Chat.module.scss";

interface ChatProps extends _ {
  selected: boolean;
  onSelectCard: (chat: _) => void;
}

export default function Chat({
  room,
  email,
  username,
  selected,
  onSelectCard,
}: ChatProps) {
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
