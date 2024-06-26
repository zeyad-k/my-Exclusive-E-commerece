import { useEffect, useState } from "react";
import ProductItemComponent from "../ui/ProductItemComponent";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import { Navigation } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

const FlashSaleProducts = () => {
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
      <div className="paddings innerWidth -z-[1]">
        {/* <div className="flash-sale-products flex w-screen gap-2"> */}
        <Swiper
          className="w-full"
          spaceBetween={20}
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 1,
            },
            750: {
              slidesPerView: 3,
            },
            1100: {
              slidesPerView: 3,
            },
            1600: {
              slidesPerView: 3,
            },
          }}
          navigation={{
            prevEl: "#swiper-button-prev",
            nextEl: "#swiper-button-next",
          }}
          modules={[Navigation]}
        >
          {result.map((product) => (
            <SwiperSlide key={product.id} className="mx-auto   ">
              <div className="sm:flex sm:justify-center">
                <ProductItemComponent key={product.id} result={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
      </div>
    </div>
  );
};

export default FlashSaleProducts;
