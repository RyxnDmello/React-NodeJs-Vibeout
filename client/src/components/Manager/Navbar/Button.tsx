export default function Button({ label, image, onClick }: IButton) {
  const className = "manager-navbar-button";

  return (
    <div className={className} onClick={onClick}>
      <img className={`${className}-icon`} src={image} />
      <p className={`${className}-label`}>{label}</p>
    </div>
  );
}

interface IButton {
  label: string;
  image: string;
  onClick: () => void;
}
