import styles from "./Profile.module.scss";

interface ProfileProps {
  image: string;
  email: string;
  username: string;
}

export default function Profile({ image, email, username }: ProfileProps) {
  return (
    <div className={styles.profile}>
      <img src={image} />

      <div>
        <p>{username}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}
