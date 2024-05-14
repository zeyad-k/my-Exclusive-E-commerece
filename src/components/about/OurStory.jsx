const OurStory = () => {
  return (
    <div className=" story flex  flex-wrap items-center justify-center   overflow-hidden lg:flex-nowrap">
      <div className=" flex flex-col   gap-10 text-left">
        <h1 className="text-justify font-inter text-6xl font-semibold leading-none tracking-widest">
          Our Story
        </h1>
        <span className="flex flex-col  gap-6 text-base  font-normal">
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </span>
      </div>

      <img
        src="/images/sideStoryimage.png"
        className="   w-full    "
        alt="side story image"
      />
    </div>
  );
};

export default OurStory;
