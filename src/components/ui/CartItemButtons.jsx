import { Link } from "react-router-dom";
import { emptyCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const CartItemButtons = () => {
  const dispatch = useDispatch();

  const handleUpdateCart = () => {
    dispatch(emptyCart());
  };

  return (
    <div className="cart-table-header flex items-center justify-between  gap-2   py-6   ">
      <div className="return-to-shop-button">
        <Link
          to="/"
          class="rounded-md border border-black px-12 py-4 hover:border-white hover:bg-main-active-color hover:text-white"
        >
          Return To Shop
        </Link>
      </div>

      <div className="update-cart-button">
        <button
          onClick={handleUpdateCart}
          className="rounded-md border border-black px-12 py-4 hover:border-white hover:bg-main-active-color hover:text-white"
        >
          Update Cart
        </button>
      </div>
    </div>
  );
};

export default CartItemButtons;
