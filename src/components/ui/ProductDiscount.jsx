const ProductDiscount = (props) => {
  const { discount } = props;
  return (
    <div className="absolute left-2 top-2 z-50 rounded-lg bg-red-500 px-2 py-1 text-white">
      -{discount}%
    </div>
  );
};

export default ProductDiscount;
