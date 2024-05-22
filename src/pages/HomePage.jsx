import CustomerService from "../components/about/CustomerService";
import CarouselOfferHomePage from "../components/home/CarouselOfferHomePage";
import FlashSaleSection from "../components/home/FlashSaleSection";
import SectionCategories from "../components/home/SectionCategories";
import SectionNewArrival from "../components/home/SectionNewArrival";
import MyCountdownComponent from "../components/ui/MyCountDown";
import SectionComponent from "../components/ui/SectionComponent";
import SectionComponentNextAndBackButtons from "../components/ui/SectionComponentNextAndBackButtons";
import FeaturedProducts from "../components/ui/Swiper";
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
        sectionBody={<FlashSaleSection />}
      />
      <SectionComponent
        upTitle={"Categories"}
        downTitle="Browse By Category"
        buttons={<SectionComponentNextAndBackButtons />}
        sectionBody={<SectionCategories />}
      />
      <SectionComponent
        upTitle={"This Month"}
        downTitle="Best Selling Products"
        buttons={<ViewAllBestSellingButton />}
        sectionBody={<FeaturedProducts />}
      />

      <div className="home-page-offer container">
        <a href="#">
          <img src="/images/offerHomePage.png" alt="home page offer" />
        </a>
      </div>

      <SectionComponent
        upTitle={"Our Products"}
        downTitle="Explore Our Products"
        buttons={<SectionComponentNextAndBackButtons />}
      />
      <SectionComponent
        upTitle={"Featured"}
        downTitle="New Arrival"
        sectionBody={<SectionNewArrival />}
      />
      <div className="container">
        <CustomerService />
      </div>
    </div>
  );
};
export default HomePage;
