import CreateIcon from "../images/buttons/create.svg";

export default function Manager() {
  const className = "manager";

  return (
    <section id={className}>
      <div className={`${className}-wrapper`}>
        <div className={`${className}-header`}>
          <h4 className={`${className}-header-title`}>Manager</h4>
        </div>
      </div>

      <div className={`${className}-controller`}>
        <input
          className={`${className}-input`}
          placeholder="Project"
          type="text"
        />

        <div className={`${className}-button`}>
          <img className={`${className}-button-icon`} src={CreateIcon} />
        </div>
      </div>

      <div className={`${className}-projects-wrapper`}></div>
    </section>
  );
}
