export default function Project() {
  const className = "manager-project";

  return (
    <div className={className}>
      <div className={`${className}-details`}>
        <h4 className={`${className}-name`}>App Development</h4>
        <p className={`${className}-description`}>Backend Systems</p>
      </div>

      <div className={`${className}-progress`}>
        <div className={`${className}-progress-bar`}></div>
        <div className={`${className}-progress-value`}>50%</div>
      </div>
    </div>
  );
}