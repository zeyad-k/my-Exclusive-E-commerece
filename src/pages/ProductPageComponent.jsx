import { useEffect, useState } from "react";
import Loading from "./loading";
import ProductPageComponentImageSection from "./ProductPageComponentImageSection";
import ProductPageComponentInfoSection from "./ProductPageComponentInfoSection";
// import { BlockLevelBreadcrumbs } from "../components/ui/BlockLevelBreadcrumbs";
// import ProductItemComponent from "../components/ui/ProductItemComponent";

const ProductPageComponent = (props) => {
  const { productId } = props;
  const productIdNumber = Number(productId);

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productIdNumber}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsError(true);
        setIsLoading(false);
      });
  }, [productIdNumber]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }

  if (!product) {
    return null;
  }

  return (
    <div className="grid grid-cols-1  gap-20  lg:grid-cols-2">
      {/* <div className="section-images grid justify-items-center gap-4  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> */}
      {/* <div className="section-images grid justify-items-center gap-4  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> */}
      <ProductPageComponentImageSection
        productImage={product.image}
        product={product}
      />
      <ProductPageComponentInfoSection product={product} />

      {/* </div> */}
    </div>
  );
};

export default ProductPageComponent;
