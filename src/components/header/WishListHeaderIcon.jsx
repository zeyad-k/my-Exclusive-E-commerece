import { Badge } from "@material-tailwind/react";
import { Heart } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const WishListHeaderIcon = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  return (
    <Badge content={wishlistItems.length}>
      <Link
        to="wishlist"
        className="header-icons wish-icon rounded-2xl hover:bg-gray-500/10 focus:bg-red-500/10 active:bg-blue-500/10"
      >
        <Heart size={27} />
      </Link>
    </Badge>
  );
};

export default WishListHeaderIcon;
