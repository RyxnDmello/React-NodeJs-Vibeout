import Profile from "../../images/profiles/profile.png";

export default function Chat({ room, isSelected, onSelectChat }: IChat) {
  const className = "profiles-chat";

  return (
    <div
      className={`${className}-wrapper ${isSelected && "selected"}`}
      onClick={() => onSelectChat(room)}
    >
      <div className={className}>
        <img className={`${className}-icon`} src={Profile} />

        <div className={`${className}-details`}>
          <h2 className={`${className}-name`}>Bir Sony</h2>
          <p className={`${className}-email`}>bir@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

interface IChat {
  room: string;
  isSelected: boolean;
  onSelectChat: (room: string) => void;
}
