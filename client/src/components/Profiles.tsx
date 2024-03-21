export default function Profiles() {
  const className = "profiles";

  return (
    <section id={className}>
      <div className={`${className}-wrapper`}>
        <div className={`${className}-header`}>
          <h2 className={`${className}-logo`}>Vibeout</h2>
        </div>

        <form className={`${className}-search`} action="/search" method="post">
          <input
            className={`${className}-search-bar`}
            placeholder="Search"
            name="search"
            type="text"
          />
        </form>
      </div>
    </section>
  );
}
