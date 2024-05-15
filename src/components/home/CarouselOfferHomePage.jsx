import { Carousel } from "@material-tailwind/react";

const CarouselOfferHomePage = () => {
  return (
    <Carousel
      autoplay={true}
      loop={true}
      autoplayDelay={5000}
      transition={{ duration: 0.75 }}
      className="rounded-xl  "
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i
                  ? "h-4 w-4 border-2  bg-main-active-color"
                  : "h-4 w-4    bg-gray-400"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <a href="#">
        <img
          src="/images/offer1.png"
          alt="offer1"
          className="h-full w-full object-cover"
        />
      </a>

      <a href="#">
        <img
          src="/images/offer1.png"
          alt="offer1"
          className="h-full w-full object-cover"
        />
      </a>

      <a href="#">
        <img
          src="/images/offer1.png"
          alt="offer1"
          className="h-full w-full object-cover"
        />
      </a>

      <a href="#">
        <img
          src="/images/offer1.png"
          alt="offer1"
          className="h-full w-full object-cover"
        />
      </a>
      <a href="#">
        <img
          src="/images/offer1.png"
          alt="offer1"
          className="h-full w-full object-cover"
        />
      </a>
    </Carousel>
  );
};

export default CarouselOfferHomePage;
