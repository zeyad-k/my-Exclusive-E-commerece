import StarRating from "../components/ui/StarReating";

const ProductPageComponentInfoSection = (props) => {
  const { product } = props;

  return (
    <div className="product__info_section   flex flex-col   gap-6 px-3 py-2  ">
      <h2 className="font-inter text-2xl font-semibold leading-none tracking-widest">
        {product.title}
      </h2>
      <div className="flex gap-2">
        <StarRating rating={product.rating} reviews={"reviews"} />
        <span>|</span>
        <span className="text-[#00FF66]">In Stock</span>
      </div>
      <h3>${product.price}</h3>
      <p>{product.description}</p>

      <hr />
      <img src="/images/freeShipping.svg" alt="" />
    </div>
  );
};

export default ProductPageComponentInfoSection;
