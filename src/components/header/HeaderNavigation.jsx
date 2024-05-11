import { Link } from "react-router-dom";

const HeaderNavigation = () => {
  return (
    <nav>
      <ul className="flex w-[367px]  justify-between gap-2 text-center font-poppins text-base font-normal leading-6 text-black">
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
