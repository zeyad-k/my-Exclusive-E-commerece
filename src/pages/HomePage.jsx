import CarouselOfferHomePage from "../components/home/CarouselOfferHomePage";
import SectionComponent from "../components/ui/SectionComponent";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="container py-16 font-poppins">
        <CarouselOfferHomePage />
      </div>
      <SectionComponent />
    </div>
  );
};
export default HomePage;
