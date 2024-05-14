import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { RiLinkedinLine } from "react-icons/ri";

const EmployeeCard = (props) => {
  const { name, title, image } = props;
  return (
    <span className="flex flex-col gap-2 py-2 sm:gap-8 sm:py-4">
      <img src={image} alt="employee image" className="h-auto w-full" />

      <div className="Employee__Info flex flex-col gap-2 sm:gap-4">
        <div className="person-info flex flex-col gap-1 sm:gap-3 ">
          <h1 className="Employee__Name tracking-4 font-inter text-2xl font-semibold leading-7 sm:text-4xl">
            {name}
          </h1>
          <p className="Employee__Title text-sm font-normal leading-6 sm:text-lg">
            {title}
          </p>
        </div>
        <span className="Employee__Socials flex gap-2 sm:gap-4 ">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <CiTwitter size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <IoLogoInstagram size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <RiLinkedinLine size={24} />
          </a>
        </span>
      </div>
    </span>
  );
};

export default EmployeeCard;
