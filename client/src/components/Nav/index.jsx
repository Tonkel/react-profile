import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    return (
      <ul className="flex-row">
        <li className="mx-1">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-1">
          <Link to="/aboutMe">About Me</Link>
        </li>
        <li className="mx-1">
          <Link to="/contactMe">Contace Me</Link>
        </li>
      </ul>
    );
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag">
            🛍️
          </span>
          -Shop-Shop
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
