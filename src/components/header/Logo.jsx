import { IconButton } from "@material-tailwind/react";
import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Logo = () => {
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
    <div className="flex items-center justify-between">
      <Link
        to="/"
        className="logo font-inter text-2xl font-bold leading-6 tracking-[1px] text-black"
      >
        <h1>Exclusive</h1>
      </Link>{" "}
      <IconButton className="sm:hidden" onClick={handleMenu} color="white">
        <MenuIcon />
      </IconButton>
    </div>
  );
};

export default Logo;
