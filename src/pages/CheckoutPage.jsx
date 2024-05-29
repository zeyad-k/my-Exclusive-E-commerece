import { BlockLevelBreadcrumbs } from "../components/ui/BlockLevelBreadcrumbs";
// import { calculateTotalPrice } from "../store/checkoutSlice";
// import { removeItem, updateQuantity } from "../store/cartSlice";
// import { addToWishlist } from "../store/wishlistSlice";
// import { useDispatch, useSelector } from "react-redux";
import { useSelector } from "react-redux";
import CartItemComponent from "../components/ui/CartItemComponent";
import CartItemHeader from "../components/ui/CartItemHeader";
import CartItemButtons from "../components/ui/CartItemButtons";
import CartItemFooter from "../components/ui/CartItemFooter";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  // const totalPrice = useSelector((state) => state.checkout.totalPrice);
  // const totalPrice = cartItems.reduce(
  //   (total, item) => total + item.price * item.quantity,
  //   0,
  // );

  // console.log(cartItems);
  // const dispatch = useDispatch();

  // const handleRemoveItem = (productId) => {
  //   dispatch(removeItem(productId));
  // };
  // const handleAddToWishlist = (product) => {
  //   dispatch(addToWishlist(product));
  //   dispatch(removeItem(product.id));
  // };

  // Function to handle updating the quantity of an item in the cart
  // const handleUpdateQuantity = (productId, quantity) => {
  //   if (!isNaN(quantity)) {
  //     dispatch(updateQuantity({ id: productId, quantity: Number(quantity) }));
  //   }
  // };

  return (
    <div className=" container my-4  flex flex-col gap-10 font-poppins  lg:my-16   ">
      <BlockLevelBreadcrumbs />

      <CartItemHeader />
      <div className="flex flex-col gap-5">
        {cartItems.length === 0 ? (
          <div className="border-black/400 rounded-md border py-4 text-center shadow-sm">
            No Items in the Cart Yet.
          </div>
        ) : (
          cartItems.map((item, index) => (
            <CartItemComponent result={item} key={index} />
          ))
        )}
        <CartItemButtons />
        <CartItemFooter />
      </div>
    </div>
  );
};

export default CheckoutPage;
