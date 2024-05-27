import ViewAllProductsButton from "../ui/ViewAllProductsButton";
import FlashSaleProducts from "./FlashSaleProducts";

const SectionFlashSale = () => {
  return (
    <div className="section-flash-sale flex flex-col  gap-16 ">
      <FlashSaleProducts />
      <span className="flex items-center justify-center">
        <ViewAllProductsButton className="" />
      </span>
      <hr className="   border" />
    </div>
  );
};

export default SectionFlashSale;
