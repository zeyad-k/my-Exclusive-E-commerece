import ProductItemComponent from "../ui/ProductItemComponent";
import { useEffect, useState } from "react";
import Loading from "../../pages/loading";
import { Link } from "react-router-dom";

const RelatedItemsSection = () => {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
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
    <div className="flex flex-col justify-center gap-4">
      <div className="Section__Header__Content flex items-center justify-between  gap-5">
        <span className="Section__Header_Up flex  items-center gap-4  text-base font-semibold text-main-active-color">
          <span
            before=""
            className=" h-10 w-5 rounded-md bg-main-active-color before:content-[attr(before)]  "
          ></span>
          <span>Related Items</span>
        </span>

        <Link
          to="/allProducts"
          className="rounded-md border border-black px-12 py-4 hover:border-white hover:bg-main-active-color hover:text-white"
        >
          See All
        </Link>
      </div>

      <div className="section-body flex flex-wrap justify-center gap-4   lg:flex-nowrap">
        {result.map((item, index) => (
          <ProductItemComponent result={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RelatedItemsSection;
