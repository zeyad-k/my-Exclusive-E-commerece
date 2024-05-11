import HeaderIcons from "./HeaderIcons";
import HeaderNavigation from "./HeaderNavigation";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="mx-auto mt-10 flex max-w-[1200px] flex-col items-center justify-between gap-2 py-2 md:flex-row ">
      <Logo />
      <HeaderNavigation />
      <HeaderIcons />
    </header>
  );
};

export default Header;
