import { IButton } from "../../../interfaces/register/Form";

import Icon from "../../../images/buttons/arrow.svg";

export default function Button({ label }: IButton) {
  const className = "form-button";

  return (
    <button className={className} type="submit">
      <p className={`${className}-label`}>{label}</p>
      <img className={`${className}-icon`} src={Icon} />
    </button>
  );
}
