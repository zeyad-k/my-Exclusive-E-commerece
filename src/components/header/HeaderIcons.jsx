import { AuthContext } from "../../context/Auth";
import CartHeaderIcon from "./CartHeaderIcon";
import SearchInput from "./SearchInput";
import UserHeaderIcon from "./UserHeaderIcon";
import WishListHeaderIcon from "./WishListHeaderIcon";
import { useContext } from "react";
const HeaderIcons = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex items-center gap-2">
      <SearchInput />
      <WishListHeaderIcon />
      <CartHeaderIcon />
      {user && <UserHeaderIcon />}
    </div>
  );
};

export default HeaderIcons;
