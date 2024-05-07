import HeaderIcons from "./HeaderIcons";
import HeaderNavigation from "./HeaderNavigation";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="mx-auto mt-10 flex max-w-[1200px] justify-between py-2">
      <Logo />
      <HeaderNavigation />
      <HeaderIcons />
    </header>
  );
};

export default Header;
