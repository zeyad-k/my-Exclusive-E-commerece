import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartBill = () => {
  const cartItems = useSelector((state) => state.cart.items);
  // const totalPrice = cartItems
  //   .reduce((total, item) => total + item.price * item.quantity, 0)
  //   .toFixed(2)
  //   ;

const totalPrice = cartItems
  ? cartItems
      .reduce(
        (total, item) =>
          total +
          (typeof item.price === 'number' && typeof item.quantity === 'number'
            ? item.price * item.quantity
            : 0),
        0
      )
      .toFixed(2)
  : '0.00';
  return (
    <div className="Cart__Bill flex min-w-[370px] flex-col gap-6 rounded border-2 border-black px-6 py-8 ">
      <h2 className="bill_header text-xl font-medium"> Cart Total</h2>
      <div className="bill_body flex flex-col gap-4">
        <div className="flex justify-between border-b-2   border-black/30 pb-3">
          <span>Subtotal</span>
          <span>$ {totalPrice}</span>
        </div>
        <div className="flex justify-between border-b-2   border-black/30 pb-3">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between pb-3     ">
          <span>Total</span>
          <span>$ {totalPrice}</span>
        </div>
      </div>

      <div className="flex  items-center justify-center">
        <Link
          to="/checkout"
          className="rounded-md   bg-main-active-color px-12 py-4 text-white hover:bg-white hover:text-main-active-color hover:shadow-lg "
        >
          Proceeds to Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartBill;
