import HeaderIcons from "./HeaderIcons";
import HeaderNavigation from "./HeaderNavigation";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="mx-auto flex max-w-[1200px] justify-between">
      <Logo />
      <HeaderNavigation />
      <HeaderIcons />
    </header>
  );
};

export default Header;
