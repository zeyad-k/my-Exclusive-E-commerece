import { useState } from "react";

const ProfitIconComponent = (props) => {
  const { serviceNumber, serviceStatement, serviceIcon, serviceIconHover } =
    props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="about-metric-overview-component flex  h-60  w-72 flex-col items-center justify-center gap-2 rounded-md border border-black  border-opacity-30 px-12 py-8 hover:border-none hover:bg-main-active-color hover:text-white hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={isHovered ? serviceIconHover : serviceIcon} alt="CellPhone" />
      <h3 className="font-inter text-3xl font-extrabold leading-snug tracking-wide">
        {serviceNumber}K
      </h3>
      <p className="text-center font-poppins text-base font-normal  ">
        {serviceStatement}
      </p>
    </div>
  );
};

{
  /* <div className="sellers-active flex h-64 w-64 flex-col items-center justify-center gap-2 rounded-md border border-black  border-opacity-30 px-12 py-8 hover:border-none hover:bg-main-active-color hover:text-white hover:shadow-lg">
  <span></span>
</div>; */
}

export default ProfitIconComponent;
