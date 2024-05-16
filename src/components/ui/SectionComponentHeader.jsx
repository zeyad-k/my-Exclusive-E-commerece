import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import MyCountdownComponent from "./MyCountDown";

const SectionComponentHeader = (props) => {
  const { upTitle, downTitle, downContent, buttons } = props;

  return (
    <div className="Section__Header flex flex-wrap justify-between">
      <div className="Section__Header__Content flex flex-col gap-5">
        <span className="Section__Header_Up flex  items-center gap-4  text-base font-semibold text-main-active-color">
          <span
            before=""
            className=" h-10 w-5 rounded-md bg-main-active-color before:content-[attr(before)]  "
          ></span>
          <span>{upTitle}</span>
        </span>

        <span className="Section__Header_Down flex flex-col items-center gap-10 md:flex-row lg:gap-20 ">
          <span className="text-5xl  font-semibold leading-relaxed tracking-wider">
            {downTitle}
          </span>
          {downContent && downContent}
        </span>
      </div>
      <div className="Section__Header__Buttons flex gap-2 self-end py-4">
        {buttons && buttons}
      </div>
    </div>
  );
};

export default SectionComponentHeader;
