import CategoryIconComponent from "./CategoryIconComponent";

const SectionCategories = () => {
  const categories = [
    {
      categoryName: "Phones",
      categoryIcon: "/categoryIcons/Category-CellPhone.svg",
      categoryIconHover: "/categoryIcons/Category-CellPhone-Hover.svg",
    },

    {
      categoryName: "Computers",
      categoryIcon: "/categoryIcons/Category-Computer.svg",
      categoryIconHover: "/categoryIcons/Category-Compute-Hover.svg",
    },

    {
      categoryName: "SmartWatch",
      categoryIcon: "/categoryIcons/Category-SmartWatch.svg",
      categoryIconHover: "/categoryIcons/Category-SmartWatch-Hover.svg",
    },

    {
      categoryName: "Camera",
      categoryIcon: "/categoryIcons/Category-Camera.svg",
      categoryIconHover: "/categoryIcons/Category-Camera-Hover.svg",
    },

    {
      categoryName: "HeadPhones",
      categoryIcon: "/categoryIcons/Category-Headphone.svg",
      categoryIconHover: "/categoryIcons/Category-Headphone-Hover.svg",
    },

    {
      categoryName: "Gaming",
      categoryIcon: "/categoryIcons/Category-Gamepad.svg",
      categoryIconHover: "/categoryIcons/Category-Gamepad-Hover.svg",
    },
  ];
  return (
    <>
      <section className="section-categories container flex  flex-wrap items-center justify-center gap-6 lg:flex-nowrap lg:justify-between ">
        {categories.map((category, index) => (
          <CategoryIconComponent
            key={index}
            categoryName={category.categoryName}
            categoryIcon={category.categoryIcon}
            categoryIconHover={category.categoryIconHover}
          />
        ))}
      </section>

      <hr className="mt-20 border" />
    </>
  );
};

export default SectionCategories;
