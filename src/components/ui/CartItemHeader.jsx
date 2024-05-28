const CartItemHeader = ( ) => {
  return (
    <div className="cart-table-header flex justify-between gap-2 rounded-lg  px-10 py-6 shadow-md ">
      <span>Product</span>
      <span>Price</span>
      <span>Quantity</span>
      <span>Subtotal</span>
    </div>
  );
};

export default CartItemHeader;
