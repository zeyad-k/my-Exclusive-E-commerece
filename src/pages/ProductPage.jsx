import { BlockLevelBreadcrumbs } from "../components/ui/BlockLevelBreadcrumbs";
import { useParams } from "react-router-dom";
import ProductPageComponent from "./ProductPageComponent";
import RelatedItemsSection from "../components/Wishlist/RelatedItemsSection";

const ProductPage = () => {
  const { productId } = useParams();
  const productIdNumber = Number(productId);

  return (
    <div className="container my-4 flex flex-col gap-10 font-poppins lg:my-10">
      <BlockLevelBreadcrumbs />
      <ProductPageComponent productId={productIdNumber} />
      <RelatedItemsSection />
    </div>
  );
};

export default ProductPage;
