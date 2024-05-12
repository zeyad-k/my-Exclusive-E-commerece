import HeaderIcons from "./HeaderIcons";
import HeaderNavigation from "./HeaderNavigation";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="container mt-10 flex flex-col items-center justify-between gap-2 px-4 py-2 md:flex-row md:px-0">
      <Logo />
      <HeaderNavigation />
      <HeaderIcons />
    </header>
  );
};

export default Header;
