import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/cartSlice";
import { addToWishlist, removeFromWishlist } from "../../store/wishlistSlice";
import { useState } from "react";
import { EyeIcon, Heart } from "lucide-react";
import ProductDiscount from "./ProductDiscount";
import StarRating from "./StarReating";
import { Link } from "react-router-dom";

const ProductItemComponent = ({ result }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const CartItems = useSelector((state) => state.cart.items);

  const [quantity, setQuantity] = useState(1);

  const isInWishList =
    wishlistItems.filter((item) => item.id === result.id).length > 0;

  const isInCart = CartItems.filter((item) => item.id === result.id).length > 0;

  // const handleDecrement = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // };

  // const handleIncrement = () => {
  //   setQuantity(quantity + 1);
  // };

  const handleAddToCart = () => {
    if (!isInCart) {
      const item = { id: result.id, quantity, ...result };
      dispatch(addItem(item));
    }
  };

  const handleAddToWishlist = () => {
    if (!isInWishList) {
      const item = { id: result.id, ...result };
      dispatch(addToWishlist(item));
    } else {
      dispatch(removeFromWishlist(result.id));
    }
  };

  return (
    <div className="m-4 h-[400px] w-64 overflow-hidden rounded-lg border p-3">
      <div className="relative w-full ">
        {result.id == 1 ? (
          <ProductDiscount discount={5} />
        ) : (
          result.discountPercentage && (
            <ProductDiscount discount={result.discountPercentage} />
          )
        )}

        <button
          onClick={handleAddToWishlist}
          className="absolute right-2 top-2 z-50 flex items-center justify-center rounded-full bg-gray-100 p-2.5"
        >
          <Heart className={`${isInWishList && "fill-red-500 text-red-500"}`} />
        </button>

        <Link
          to={`/${result.id}`}
          className="absolute right-2 top-16 z-50 flex items-center justify-center rounded-full bg-gray-100 p-2.5"
        >
          <EyeIcon />
        </Link>
      </div>
      <div className="group relative">
        <img
          src={result.image}
          alt={result.title}
          className="sm:w-50 m-auto my-4 w-40 max-w-full object-cover"
        />
        <button
          onClick={handleAddToCart}
          className="absolute bottom-0 hidden w-full bg-gray-900 px-4 py-3 text-white group-hover:block "
        >
          Add to cart
        </button>
      </div>

      <div className="p-4">
        <h2 className="line-clamp-1 text-lg font-semibold ">{result.title}</h2>
        <div className="mt-2 flex items-center gap-4 text-lg  font-semibold">
          <span className="font-semiBold text-lg  text-main-active-color">
            ${result.price}
          </span>
          {result.id == 1 && (
            <span className="text-black/65 line-through">${result.price}</span>
          )}
        </div>
        <StarRating rating={result.rating} />
      </div>
    </div>
  );
};

export default ProductItemComponent; // import { useState, useEffect } from "react";
