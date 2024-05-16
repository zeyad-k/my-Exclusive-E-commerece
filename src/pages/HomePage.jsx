import CarouselOfferHomePage from "../components/home/CarouselOfferHomePage";
import MyCountdownComponent from "../components/ui/MyCountDown";
import SectionComponent from "../components/ui/SectionComponent";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="container py-16 font-poppins">
        <CarouselOfferHomePage />
      </div>
      <SectionComponent
        upTitle={"Today’s"}
        downTitle="Flash Sale"
        downContent={<MyCountdownComponent />}
      />
      <SectionComponent
        upTitle={"Today’s"}
        downTitle="Flash Sale"
        downContent={<MyCountdownComponent />}
      />
    </div>
  );
};
export default HomePage;
