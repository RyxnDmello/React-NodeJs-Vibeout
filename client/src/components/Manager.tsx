import CreateIcon from "../images/buttons/create.svg";

import Project from "./Manager/Project";

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

      <div className={`${className}-projects-wrapper`}>
        <div className={`${className}-projects`}>
          {Array.from({ length: 20 }, (_, i) => (
            <Project key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
