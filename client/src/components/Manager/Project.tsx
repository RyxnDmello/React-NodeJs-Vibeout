export default function Project() {
  const className = "manager-project";

  return (
    <div className={className}>
      <div className={`${className}-row`}>
        <div className={`${className}-details`}>
          <h4 className={`${className}-name`}>App Development</h4>
          <p className={`${className}-description`}>Backend Systems</p>
        </div>

        <div className={`${className}-type`}></div>
      </div>
    </div>
  );
}
