import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const SectionComponentNextAndBackButtons = () => {
  return (
    <>
      <button className="Section__Header__Button__Back   rounded-[50%] bg-main-form-input-color px-3 py-3     hover:bg-main-active-color hover:text-white">
        <FaArrowLeftLong size={20} />
      </button>
      <button className="Section__Header__Button__Next   rounded-[50%] bg-main-form-input-color px-3 py-3     hover:bg-main-active-color hover:text-white">
        <FaArrowRightLong size={20} />
      </button>
    </>
  );
};

export default SectionComponentNextAndBackButtons;
