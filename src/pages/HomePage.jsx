import CarouselOfferHomePage from "../components/home/CarouselOfferHomePage";
import MyCountdownComponent from "../components/ui/MyCountDown";
import SectionComponent from "../components/ui/SectionComponent";
import SectionComponentNextAndBackButtons from "../components/ui/SectionComponentNextAndBackButtons";
import ViewAllBestSellingButton from "../components/ui/ViewAllBestSellingButton";

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
        buttons={<SectionComponentNextAndBackButtons />}
      />
      <SectionComponent
        upTitle={"Categories"}
        downTitle="Browse By Category"
        buttons={<SectionComponentNextAndBackButtons />}
      />
      <SectionComponent
        upTitle={"This Month"}
        downTitle="Best Selling Products"
        buttons={<ViewAllBestSellingButton />}
      />
    </div>
  );
};
export default HomePage;
