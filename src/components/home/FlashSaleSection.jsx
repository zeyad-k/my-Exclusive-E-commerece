import { useEffect, useState } from "react";
import ProductItemComponent from "../ui/ProductItemComponent";

const FlashSaleSection = () => {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
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
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }

  if (!result) {
    return null;
  }

  return (
    <div className="flash-sale-section">
      <div className="flash-sale-products flex w-screen gap-2">
        {result.map((product) => (
          <ProductItemComponent key={product.id} result={product} />
        ))}
      </div>
    </div>
  );
};

export default FlashSaleSection;
