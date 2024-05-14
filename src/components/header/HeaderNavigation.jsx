import { Link } from "react-router-dom";

const HeaderNavigation = ({ isMenuOpen }) => {
  return (
    <nav className="flex w-full flex-1 items-center justify-center overflow-hidden px-3 py-3">
      <ul
        className={` ${isMenuOpen ? "flex" : "hidden"}   flex-col gap-5 text-center font-poppins text-base font-normal leading-6 text-black sm:flex-row`}
      >
        <li>
          <Link
            className="transition duration-200 ease-in-out hover:underline  active:underline"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="transition duration-200 ease-in-out hover:underline  active:underline"
            to="contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className="transition duration-200 ease-in-out hover:underline  active:underline"
            to="about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="transition duration-200 ease-in-out hover:underline  active:underline"
            to="signUp"
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
