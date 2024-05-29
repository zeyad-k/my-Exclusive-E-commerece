import StarRating from "../components/ui/StarReating";
// import { useDispatch, useSelector } from "react-redux";
import AddToWishlistButton from "../components/ui/AddToWishlistBurron";
import BuyNowButton from "../components/ui/BuyNowButton";

const ProductPageComponentInfoSection = (props) => {
  //   const dispatch = useDispatch();

  const { product } = props;

  return (
    <div className="product__info_section   flex flex-col   gap-4 px-3 py-2  ">
      <h2 className="font-inter text-2xl font-semibold leading-none tracking-widest">
        {product.title}
      </h2>
      <div className="flex gap-2">
        <StarRating rating={product.rating} reviews={"reviews"} />
        <span>|</span>
        <span className="text-[#00FF66]">In Stock</span>
      </div>
      <h3 className="font-inter text-2xl font-normal  leading-none tracking-widest">
        ${product.price}
      </h3>
      <p className="text-sm capitalize">{product.description}</p>
      <hr className="rounded border border-black/40" />
      <div className="product__buttons flex gap-5">
        <BuyNowButton product={product} />
        <AddToWishlistButton product={product} />
      </div>
      <img src="/images/freeShipping.svg" alt="" />
    </div>
  );
};

export default ProductPageComponentInfoSection;
