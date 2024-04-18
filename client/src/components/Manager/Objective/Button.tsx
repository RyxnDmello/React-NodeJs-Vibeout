export default function Button({ icon, onClick }: IButton) {
  const className = "manager-objective-button";

  return (
    <div className={className} onClick={onClick}>
      <img className={`${className}-icon`} src={icon} />
    </div>
  );
}

interface IButton {
  icon: string;
  onClick: () => void;
}
