const ApplyCoupon = () => {
  return (
    <div className="apply-coupon flex gap-4">
      <div className="flex items-center rounded-md border border-black px-6 py-4">
        <input type="text" className="outline-none" placeholder="Coupon Code" />
      </div>
      <button className="rounded-md   bg-main-active-color px-12 py-4 text-white hover:bg-white hover:text-main-active-color hover:shadow-lg ">
        Apply Coupon
      </button>
    </div>
  );
};

export default ApplyCoupon;
