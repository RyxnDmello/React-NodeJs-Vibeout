import Icon from "../../../images/buttons/arrow.svg";

interface ButtonProps {
  label: string;
}

export default function Button({ label }: ButtonProps) {
  const className = "form-button";

  return (
    <button className={className} type="submit">
      <p className={`${className}-label`}>{label}</p>
      <img className={`${className}-icon`} src={Icon} />
    </button>
  );
}
