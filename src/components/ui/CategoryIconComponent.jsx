import { useState } from "react";

const CategoryIconComponent = (props) => {
  const { categoryName, categoryIcon, categoryIconHover } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="section-categories-category flex    w-40   flex-col items-center justify-center gap-4 rounded border border-black/30 px-14 py-6 hover:border-white hover:bg-main-active-color hover:text-white hover:shadow-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={isHovered ? categoryIconHover : categoryIcon} alt="CellPhone" />
      <span>{categoryName}</span>
    </div>
  );
};

export default CategoryIconComponent;
