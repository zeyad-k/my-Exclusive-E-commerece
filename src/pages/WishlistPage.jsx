import { Link } from "react-router-dom";
import { BlockLevelBreadcrumbs } from "../components/ui/BlockLevelBreadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromWishlist,
  removeAllFromWishlist,
} from "../store/wishlistSlice";
import { updateQuantity } from "../store/cartSlice";
import { addItem as addItemToCart } from "../store/cartSlice";

const WishlistPage = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  // Function to handle removing an item from the cart
  const handleRemoveItem = (productId) => {
    dispatch(removeFromWishlist(productId));
  };

  // Function to handle updating the quantity of an item in the cart
  const handleUpdateQuantity = (productId, quantity) => {
    dispatch(updateQuantity({ id: productId, quantity }));
  };

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));

    // Dispatch action to remove all wishlist items
    dispatch(removeFromWishlist(product.id));
  };

  const handleAddAllToCart = () => {
    wishlistItems.forEach((product) => {
      console.log(product);
      dispatch(addItemToCart(product));
    });

    // Dispatch action to remove all wishlist items
    dispatch(removeAllFromWishlist());
  };

  return (
    <div className="container my-4 flex flex-col gap-32 font-poppins lg:my-16">
      <BlockLevelBreadcrumbs />
      <div className="flex flex-col justify-center gap-4">
        <div className="section-header flex items-center justify-between">
          <p>
            Wishlist(<span>{wishlistItems.length}</span>)
          </p>
          {/* <Link to="/cart"> */}
          <button
            onClick={handleAddAllToCart}
            className="rounded-md border border-black px-12 py-4 hover:border-white hover:bg-main-active-color hover:text-white"
          >
            Move All To Bag
          </button>
          {/* </Link> */}
        </div>
        <div className="section-body">
          {wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-product-card">
              <img
                className="rounded bg-main-form-input-color px-12 py-14"
                src={item.img}
                alt={item.name}
              />
              <div className=" text-base  font-medium"></div>
              <p className=" ">{item.name}</p>
              <p className="flex gap-2">
                <span className="">${item.price}</span>
                <span>${item.discountedPrice}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
