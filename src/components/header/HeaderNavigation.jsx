import { IconButton } from "@material-tailwind/react";
import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeaderNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsMenuOpen(true);
    }
  }, []);
  return (
    <nav className="relative w-full overflow-hidden px-3 py-3">
      <IconButton
        className="absolute left-[2%] sm:hidden"
        onClick={handleMenu}
        color="white"
      >
        <MenuIcon />
      </IconButton>
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
