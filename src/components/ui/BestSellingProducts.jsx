 import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import ProductItemComponent from "./ProductItemComponent";

const BestSellingProducts = () => {
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
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }

  if (!result) {
    return null;
  }
  // const { most_visited_products } = useSnapshot(state);
  return (
    <div className="section-body grid justify-items-center gap-4  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4    ">
      {result.map((item, index) => (
        <ProductItemComponent result={item} key={index} />
      ))}
    </div>

    // <div className="paddings innerWidth -z-[1]">
    //   <Swiper
    //     className="w-full"
    //     spaceBetween={23}
    //     breakpoints={{
    //       480: {
    //         slidesPerView: 1,
    //       },
    //       600: {
    //         slidesPerView: 2,
    //       },
    //       750: {
    //         slidesPerView: 3,
    //       },
    //       1100: {
    //         slidesPerView: 4,
    //       },
    //       1600: {
    //         slidesPerView: 5,
    //       },
    //     }}
    //   >
    //     {result.map((product) => (
    //       <SwiperSlide key={product.id} className="mx-auto !min-w-[310px]">
    //         <ProductItemComponent key={product.id} result={product} />
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>
  );
};

export default BestSellingProducts;
