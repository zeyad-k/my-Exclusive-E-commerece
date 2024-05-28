import { useEffect, useState } from "react";
import ProductItemComponent from "./ProductItemComponent";
import ViewAllProductsButton from "./ViewAllProductsButton";

const ExploreOurProducts = () => {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=8")
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
    <div className="container flex flex-col   items-center gap-12  ">
    
      <div className="section-body grid justify-items-center gap-6  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4    ">
        {result.map((item, index) => (
          <ProductItemComponent result={item} key={index} />
        ))}
      </div>

      {/* <span className="flex items-center justify-center">
        <ViewAllProductsButton className="  mb-2" />
      </span> */}
     
    </div>
  );
};

export default ExploreOurProducts;
