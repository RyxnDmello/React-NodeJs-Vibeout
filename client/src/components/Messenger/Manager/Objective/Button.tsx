interface ButtonProps {
  icon: string;
  onClick: () => void;
}

export default function Button({ icon, onClick }: ButtonProps) {
  const className = "manager-objective-button";

  return (
    <div className={className} onClick={onClick}>
      <img className={`${className}-icon`} src={icon} />
    </div>
  );
}
