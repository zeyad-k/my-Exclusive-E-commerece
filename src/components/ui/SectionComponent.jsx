import MyCountdownComponent from "./MyCountDown";

const SectionComponent = () => {
  return (
    <div className="container font-poppins">
      <div className="Section__Header flex justify-between ">
        <div className="Section__Header__Content flex flex-col gap-5">
          <span className="Section__Header_Up flex  items-center gap-4  text-base font-semibold text-main-active-color">
            <span
              before=""
              className=" h-10 w-5 rounded-md bg-main-active-color before:content-[attr(before)]  "
            ></span>
            <span>Today’s</span>
          </span>

          <span className="Section__Header_Down flex flex-col items-center gap-10 md:flex-row lg:gap-20 ">
            <span className="text-5xl  font-semibold leading-relaxed tracking-wider">
              Flash Sale
            </span>
            <MyCountdownComponent />
          </span>
        </div>
        <div className="Section__Header__Buttons self-end">Today’s</div>
      </div>

      <div className="Section__Body"></div>
    </div>
  );
};

export default SectionComponent;
