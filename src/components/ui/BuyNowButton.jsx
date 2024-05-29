import { useDispatch, useSelector } from "react-redux";
import {
  addItem as addItemToCart,
  updateQuantity,
} from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const BuyNowButton = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const CartItems = useSelector((state) => state.cart.items);
  const cartItem = CartItems.find((item) => item.id === product.id);
  const productQuantity = cartItem ? cartItem.quantity : 0;
  const [quantity, setQuantity] = useState(productQuantity);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      dispatch(updateQuantity({ id: product.id, quantity: quantity - 1 }));
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    dispatch(updateQuantity({ id: product.id, quantity: quantity + 1 }));
  };

  const isInCart = CartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(addItemToCart({ ...product, quantity: 1 }));
      navigate("/checkout");
    }
    navigate("/checkout");
  };

  return (
    <div className=" flex gap-3">
      <span className="flex justify-center   rounded-md border border-black     ">
        <button
          onClick={handleDecrement}
          className="decrease-quantity  rounded px-1 text-2xl hover:bg-main-active-color hover:text-white active:bg-main-active-color/80"
        >
          -
        </button>
        <input
          className=" w-8  border-l border-r border-black px-1 outline-none     "
          type="text"
          min={1}
          value={quantity}
        />

        <button
          onClick={handleIncrement}
          className="increase-quantity  rounded px-1 text-2xl hover:bg-main-active-color hover:text-white active:bg-main-active-color/80"
        >
          +
        </button>
      </span>

      <button
        onClick={handleAddToCart}
        className="rounded bg-main-active-color px-12 py-3 text-white hover:bg-white hover:text-main-active-color hover:shadow active:translate-y-1"
      >
        Buy Now
      </button>
    </div>
  );
};

export default BuyNowButton;
