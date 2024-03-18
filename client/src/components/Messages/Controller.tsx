import Send from "../../images/buttons/send.svg";

export default function Input({ placeholder }: IInput) {
  const className = "message-controller";

  return (
    <div className={`${className}-wrapper`}>
      <div className={className}>
        <input
          className={`${className}-input`}
          placeholder={placeholder}
          autoCorrect="false"
          autoComplete="off"
          name="message"
          type="text"
        />

        <div className={`${className}-icon`}>
          <img className={`${className}-icon-image`} src={Send} />
        </div>
      </div>
    </div>
  );
}

interface IInput {
  placeholder: string;
}
