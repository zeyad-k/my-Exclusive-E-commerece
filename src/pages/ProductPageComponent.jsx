import { useEffect, useState } from "react";
import Loading from "./loading";
import { BlockLevelBreadcrumbs } from "../components/ui/BlockLevelBreadcrumbs";
import ProductItemComponent from "../components/ui/ProductItemComponent";

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
 
    <div className="grid  gap-4">
      <div className="section-body grid justify-items-center gap-4  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ProductItemComponent result={product} key={product.id} />
      </div>
    </div>

   );
};

export default ProductPageComponent;
