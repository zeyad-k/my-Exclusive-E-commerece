import HeaderIcons from "./HeaderIcons";
import HeaderNavigation from "./HeaderNavigation";
import { IconButton } from "@material-tailwind/react";
import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
    <header className="container mt-10 flex flex-col items-center justify-between gap-2 py-2 md:flex-row">
      <div className="flex w-full items-center justify-between sm:w-auto">
        <Link
          to="/"
          className="logo font-inter text-2xl font-bold leading-6 tracking-[1px] text-black"
        >
          <h1>Exclusive</h1>
        </Link> 
        <IconButton className="sm:hidden" onClick={handleMenu} color="white">
          <MenuIcon />
        </IconButton>
      </div>
      <HeaderNavigation isMenuOpen={isMenuOpen} />
      <HeaderIcons />
    </header>
  );
};

export default Header;
