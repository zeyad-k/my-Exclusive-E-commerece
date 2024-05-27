import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/cartSlice";
import { addToWishlist } from "../../store/wishlistSlice";
import { useState } from "react";
import { Heart } from "lucide-react";

const ProductItemComponent = ({ result }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const [quantity, setQuantity] = useState(1);

  const isInWishList =
    wishlistItems.filter((item) => item.id === result.id).length > 0;

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    const item = { id: result.id, quantity, ...result };
    dispatch(addItem(item));
  };

  const handleAddToWishlist = () => {
    const item = { id: result.id, ...result };
    dispatch(addToWishlist(item));
  };

  return (
    <div className="m-4 h-[400px] w-64 overflow-hidden rounded-lg border p-3">
      <div className="relative w-full ">
        <div className="absolute left-2 top-2 z-50 rounded-lg bg-red-500 px-2 py-1 text-white">
          -{result.discountPercentage}%{" "}
        </div>
        <button
          onClick={handleAddToWishlist}
          className="absolute right-2 top-2 z-50 flex items-center justify-center rounded-full bg-gray-100 p-2.5"
        >
          <Heart  className={`${isInWishList && "fill-red-500 text-red-500"}`} />
        </button>
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
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xl font-bold text-red-500">
            ${result.price}
          </span>
          {result.oldPrice && (
            <span className="text-gray-500 line-through">
              ${result.oldPrice}
            </span>
          )}
        </div>
        <div className="mt-2  text-main-star-color">
          {"★".repeat(result.rating ? Math.round(result.rating.rate) : 0)}{" "}
          <span className="text-gray-600">
            ({result.rating ? result.rating.count : 0})
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItemComponent; // import { useState, useEffect } from "react";
