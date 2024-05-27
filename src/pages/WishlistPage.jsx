import { Link } from "react-router-dom";
import { BlockLevelBreadcrumbs } from "../components/ui/BlockLevelBreadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromWishlist,
  removeAllFromWishlist,
} from "../store/wishlistSlice";
import { updateQuantity } from "../store/cartSlice";
import { addItem as addItemToCart } from "../store/cartSlice";
import ProductItemComponent from "../components/ui/ProductItemComponent";
import JustForyouSection from "../components/Wishlist/JustForyouSection";

const WishlistPage = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  // Function to handle removing an item from the cart
  // const handleRemoveItem = (productId) => {
  //   dispatch(removeFromWishlist(productId));
  // };

  // Function to handle updating the quantity of an item in the cart
  // const handleUpdateQuantity = (productId, quantity) => {
  //   dispatch(updateQuantity({ id: productId, quantity }));
  // };

  // const handleAddToCart = (product) => {
  //   dispatch(addItemToCart(product));

  //   // Dispatch action to remove all wishlist items
  //   dispatch(removeFromWishlist(product.id));
  // };

  const handleAddAllToCart = () => {
    wishlistItems.forEach((product) => {
      console.log(product);
      dispatch(addItemToCart(product));
    });

    // Dispatch action to remove all wishlist items
    dispatch(removeAllFromWishlist());
  };

  return (
    <div className="container my-4 flex flex-col gap-32 font-poppins lg:my-10">
      <BlockLevelBreadcrumbs />

      <div className="flex flex-col justify-center gap-4">
        <div className="section-header  flex items-center justify-between">
          <p>
            Wishlist(<span>{wishlistItems.length}</span>)
          </p>

          <button
            onClick={handleAddAllToCart}
            className="rounded-md border border-black px-12 py-4 hover:border-white hover:bg-main-active-color hover:text-white"
          >
            Move All To Bag
          </button>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="self-center rounded-md bg-yellow-100 p-4 text-center text-2xl font-semibold text-red-500 shadow-lg">
            No items in wishlist
          </div>
        ) : (
          <div className="section-body flex flex-wrap justify-center gap-4 lg:flex-nowrap lg:justify-start">
            {wishlistItems.map((item, index) => (
              <ProductItemComponent result={item} key={index} />
            ))}
          </div>
        )}
      </div>

      <JustForyouSection />
    </div>
  );
};

export default WishlistPage;
