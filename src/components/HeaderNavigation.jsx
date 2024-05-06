import { Link } from "react-router-dom";

const HeaderNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/about">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
