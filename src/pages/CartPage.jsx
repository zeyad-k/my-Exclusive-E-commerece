import { BlockLevelBreadcrumbs } from "../components/ui/BlockLevelBreadcrumbs";
import { calculateTotalPrice } from "../store/checkoutSlice";
import { removeItem, updateQuantity } from "../store/cartSlice";
import { addToWishlist } from "../store/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductItemComponent from "../components/ui/ProductItemComponent";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.checkout.totalPrice);
console.log(cartItems)
  const dispatch = useDispatch();

  const handleRemoveItem = (productId) => {
    dispatch(removeItem(productId));
  };
  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
    dispatch(removeItem(product.id));
  };

  // Function to handle updating the quantity of an item in the cart
  const handleUpdateQuantity = (productId, quantity) => {
    if (!isNaN(quantity)) {
      dispatch(updateQuantity({ id: productId, quantity: Number(quantity) }));
    }
  };

  return (
    <div className=" container my-4  flex flex-col gap-32 font-poppins  lg:my-16   ">
      <BlockLevelBreadcrumbs />
      <div className="flex flex-wrap gap-5">
        {cartItems.map((item, index) => (
          <ProductItemComponent result={item} key={index} />
        ))}
      </div>
      {totalPrice}
    </div>
  );
};

export default CartPage;
