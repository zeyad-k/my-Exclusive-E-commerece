import { Heart } from "lucide-react";
import { addToWishlist, removeFromWishlist } from "../../store/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";

const AddToWishlistButton = ({ product }) => {
  const dispatch = useDispatch();

  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isInWishList =
    wishlistItems.filter((item) => item.id === product.id).length > 0;
  const handleAddToWishlist = () => {
    if (!isInWishList) {
      const item = { id: product.id, ...product };
      dispatch(addToWishlist(item));
    } else {
      dispatch(removeFromWishlist(product.id));
    }
  };

  return (
    <button
      onClick={handleAddToWishlist}
      className="  flex items-center justify-center rounded-lg border border-black  px-3 py-2"
    >
      <Heart className={`${isInWishList && "fill-red-500 text-red-500"}`} />
    </button>
  );
};

export default AddToWishlistButton;
