import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../../store/cartSlice";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const CartItemComponent = ({ result }) => {
  const dispatch = useDispatch();
  //   const wishlistItems = useSelector((state) => state.wishlist.items);
  //   const cartItems = useSelector((state) => state.cart.items);

  const [quantity, setQuantity] = useState(1);

  //   const isInWishList =
  //     wishlistItems.filter((item) => item.id === result.id).length > 0;
  //   const isInCart = cartItems.filter((item) => item.id === result.id).length > 0;

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      dispatch(updateQuantity({ id: result.id, quantity: quantity - 1 }));
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    dispatch(updateQuantity({ id: result.id, quantity: quantity + 1 }));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeItem(result.id));
  };

  //   const handleAddToWishlist = () => {
  //     if (!isInWishList) {
  //       const item = { id: result.id, ...result };
  //       dispatch(addToWishlist(item));
  //     } else {
  //       dispatch(removeFromWishlist(result.id));
  //     }
  //   };

  return (
    <div className="cart-table-body flex  items-center justify-between gap-2 rounded-lg  px-10 py-6 shadow-md ">
      <span className="flex items-center gap-2">
        <div className="group relative ">
          <img
            src={result.image}
            alt={result.title}
            className="sm:w-50 m-auto my-4 w-10 max-w-full object-cover"
          />
          <button
            onClick={handleRemoveFromCart}
            className="absolute left-1  top-6 rounded-[50%]   bg-main-active-color px-1   text-white group-hover:block "
          >
            X
          </button>
        </div>
        <h2 className="line-clamp-1 w-20 text-lg font-semibold ">
          {result.title}
        </h2>
      </span>

      <span>{result.price}</span>
      <span className="flex justify-center gap-1 rounded-md border border-black/70 px-2  py-1">
        <input
          className=" w-6 border-none outline-none     "
          type="text"
          min={1}
          value={quantity}
        />
        <div className="gap-.5 flex flex-col">
          <button
            onClick={handleIncrement}
            className="increase-quantity rounded hover:bg-main-active-color/50 active:bg-main-active-color/80"
          >
            <ChevronUp />
          </button>
          <button
            onClick={handleDecrement}
            className="increase-quantity    rounded hover:bg-main-active-color/50 active:bg-main-active-color/80"
          >
            <ChevronDown />
          </button>
        </div>
      </span>
      <span>{(quantity * result.price).toFixed(2)}</span>
    </div>
  );
};

export default CartItemComponent;
