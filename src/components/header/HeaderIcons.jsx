import CartHeaderIcon from "./CartHeaderIcon";
import SearchInput from "./SearchInput";
import WishListHeaderIcon from "./WishListHeaderIcon";

const HeaderIcons = () => {
  return (
    <div className="flex items-center gap-2">
      <SearchInput />
      <WishListHeaderIcon />
      <CartHeaderIcon />
    </div>
  );
};

export default HeaderIcons;
