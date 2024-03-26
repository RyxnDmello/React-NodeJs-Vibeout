import Icon from "../../images/logo.png";

export default function Logo() {
  const className = "logo";

  return (
    <div id={className}>
      <img className={`${className}-icon`} src={Icon} />
      <p className={`${className}-text`}>Vibeout</p>
    </div>
  );
}
