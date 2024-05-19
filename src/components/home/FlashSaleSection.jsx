import ProductItemComponent from "../ui/ProductItemComponent";

const FlashSaleSection = () => {
  return (
    <div className="flash-sale-section">
      <div className="flash-sale-products container flex gap-4">
        <ProductItemComponent />
        {/* <ProductCard />
		<ProductCard />
		<ProductCard />
		<ProductCard /> */}
      </div>
    </div>
  );
};

export default FlashSaleSection;
