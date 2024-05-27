import { useEffect, useState } from "react";
import Loading from "./loading";
import { BlockLevelBreadcrumbs } from "../components/ui/BlockLevelBreadcrumbs";
import ProductItemComponent from "../components/ui/ProductItemComponent";

const ProductPage = () => {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setResult(json);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }

  if (!result) {
    return null;
  }

  return (
    <div className="container my-4 flex flex-col gap-10 font-poppins lg:my-10">
      <BlockLevelBreadcrumbs />
      <div className="grid  gap-4">
        <div className="section-body grid justify-items-center gap-4  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4    ">
          {result.map((item, index) => (
            <ProductItemComponent result={item} key={index} />
          ))}
        </div>
      </div>
      ;
    </div>
  );
};

export default ProductPage;
