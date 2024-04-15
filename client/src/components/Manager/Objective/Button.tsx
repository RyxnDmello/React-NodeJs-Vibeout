export default function Button({ icon, action }: IButton) {
  const className = "manager-objective-button";

  return (
    <button className={className} type="submit" name="action" value={action}>
      <img className={`${className}-icon`} src={icon} />
    </button>
  );
}

interface IButton {
  icon: string;
  action: "complete" | "delete";
}
