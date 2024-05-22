// import FlashSaleSection from "../home/FlashSaleSection";

// export default function Swiper() {
//   return (
//     <>
//       <main>
//         <swiper-container>
//           <swiper-slide>
//             <span className=" bg-main-active-color">
//               <FlashSaleSection />
//             </span>{" "}
//           </swiper-slide>
//           <swiper-slide>Slide2</swiper-slide>
//           {/* <swiper-slide>Slide3</swiper-slide>
//           <swiper-slide>Slide4</swiper-slide>
//           <swiper-slide>Slide5</swiper-slide> */}
//         </swiper-container>
//       </main>
//     </>
//   );
// }

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import ProductItemComponent from "./ProductItemComponent";
// import { useSnapshot } from "valtio";
// import { state } from "@/store/valtio";

const FeaturedProducts = () => {
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
  // const { most_visited_products } = useSnapshot(state);
  return (
    <div className="paddings innerWidth -z-[1]">
      <Swiper
        className="w-full"
        spaceBetween={23}
        breakpoints={{
          480: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          750: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
        }}
      >
        {result.map((product) => (
          <SwiperSlide key={product.id} className="mx-auto !min-w-[310px]">
            <ProductItemComponent key={product.id} result={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedProducts;
