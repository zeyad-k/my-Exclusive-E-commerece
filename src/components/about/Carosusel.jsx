import { Carousel } from "@material-tailwind/react";
import EmployeeCard from "./EmployeeCard";

export default function CarouselWithContent() {
  const employees = [
    {
      name: "Tom Cruise",
      title: "Founder & Chairman",
      image: "/images/personStorySection.png",
    },
    {
      name: "Emma Watson",
      title: "Managing Director",
      image: "/images/person2StorySection.png",
    },
    {
      name: "Will Smith",
      title: "Product Designer",
      image: "/images/person2StorySection.png",
    },
  ];
  return (
    <Carousel
      className="  flex  content-center items-center  justify-center gap-16 rounded-xl     py-4 font-poppins sm:gap-8   sm:px-8 sm:py-8 md:gap-16 md:px-12 md:py-10"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i
                  ? "h-4 w-4 border-2  border-gray-500 bg-main-active-color"
                  : "h-4 w-4    bg-gray-400"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="flex items-center justify-center gap-2">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.name}
            name={employee.name}
            title={employee.title}
            image={employee.image}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-2">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.name}
            name={employee.name}
            title={employee.title}
            image={employee.image}
          />
        ))}
      </div>

      <div className="flex items-center justify-center  gap-2">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.name}
            name={employee.name}
            title={employee.title}
            image={employee.image}
          />
        ))}
      </div>
    </Carousel>
  );
}
