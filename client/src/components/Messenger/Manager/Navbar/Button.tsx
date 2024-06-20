interface ButtonProps {
  label?: string;
  image: string;
  onClick: () => void;
}

export default function Button({ label, image, onClick }: ButtonProps) {
  const className = "manager-navbar-button";

  return (
    <div className={className} onClick={onClick}>
      <img className={`${className}-icon`} src={image} />
      {label && <p className={`${className}-label`}>{label}</p>}
    </div>
  );
}
