import { Badge } from "@material-tailwind/react";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartHeaderIcon = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <Badge content={cartItems.length}>
      <Link
        to="cart"
        className="header-icons cart-icon rounded-2xl hover:bg-gray-500/10 focus:bg-red-500/10 active:bg-blue-500/10"
      >
        <ShoppingCart size={27} />
      </Link>
    </Badge>
  );
};

export default CartHeaderIcon;
