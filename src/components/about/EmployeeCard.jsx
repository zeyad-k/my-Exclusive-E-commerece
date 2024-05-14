import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { RiLinkedinLine } from "react-icons/ri";

const EmployeeCard = (props) => {
  const { name, title, image } = props;
  return (
    <span className="flex flex-col gap-8 py-4">
      <img src={image} alt="employee image" />

      <div className="Employee__Info flex flex-col gap-4">
        <div className="person-info flex flex-col gap-3 ">
          <h1 className=" Employee__Name tracking-4 font-inter text-4xl font-semibold leading-7">
            {name}
          </h1>
          <p className="Employee__Title text-lg font-normal leading-6">
            {title}
          </p>
        </div>
        <span className="Employee__Socials flex gap-4 ">
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
