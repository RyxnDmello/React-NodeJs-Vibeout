import { IProfile } from "../../interfaces/Message";

export default function Profile({ image, email, username }: IProfile) {
  const className = "messages-profile";

  return (
    <div className={className}>
      <img className={`${className}-image`} src={image} />

      <div className={`${className}-details`}>
        <p className={`${className}-name`}>{username}</p>
        <p className={`${className}-email`}>{email}</p>
      </div>
    </div>
  );
}
