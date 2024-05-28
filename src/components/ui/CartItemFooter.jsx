import ApplyCoupon from "./ApplyCoupon";
import CartBill from "./CartBill";

const CartItemFooter = () => {
  return (
    <div className="cart-table-header flex flex-col  items-center justify-between gap-8 py-6  font-poppins  md:flex-row   md:items-start   ">
      <ApplyCoupon />

      <CartBill />
    </div>
  );
};

export default CartItemFooter;
