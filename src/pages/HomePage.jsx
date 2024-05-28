import CustomerService from "../components/about/CustomerService";
import CarouselOfferHomePage from "../components/home/CarouselOfferHomePage";
import SectionCategories from "../components/home/SectionCategories";
import SectionNewArrival from "../components/home/SectionNewArrival";
import MyCountdownComponent from "../components/ui/MyCountDown";
import SectionComponent from "../components/ui/SectionComponent";
import SectionComponentNextAndBackButtons from "../components/ui/SectionComponentNextAndBackButtons";
import ViewAllBestSellingButton from "../components/ui/ViewAllBestSellingButton";
import BestSellingProducts from "../components/ui/BestSellingProducts";
import SectionFlashSale from "../components/home/SectionFlashSale";
import { AccordionCustomIcon } from "../components/ui/Accordion";
import ExploreOurProducts from "../components/ui/ExploreOurProducts";
import GoUpButton from "../components/ui/GoUpButton";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="container flex    font-poppins">
        <div className="categories-menu   hidden border-r-[.5px]   border-black/30 pt-16   lg:block">
          {" "}
          <ul className="flex  min-w-[230px] flex-col gap-4 text-base font-normal">
            <li>
              <AccordionCustomIcon
                accordionHeader="Woman’s Fashion"
                accordionBody="sub Categories"
              />
            </li>
            <li>
              <AccordionCustomIcon
                accordionHeader="Men’s Fashion"
                accordionBody="sub Categories"
              />
            </li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby’s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </div>
        <div className="px-10 pt-16">
          <CarouselOfferHomePage />
        </div>
      </div>

      <SectionComponent
        upTitle={"Today’s"}
        downTitle="Flash Sale"
        downContent={<MyCountdownComponent />}
        buttons={<SectionComponentNextAndBackButtons />}
        sectionBody={<SectionFlashSale />}
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
        sectionBody={<BestSellingProducts />}
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
        sectionBody={<ExploreOurProducts />}
      />
      <SectionComponent
        upTitle={"Featured"}
        downTitle="New Arrival"
        sectionBody={<SectionNewArrival />}
      />
      <div className="container">
        <CustomerService />
      </div>

      <div className="container py-10">
        <GoUpButton />
      </div>
    </div>
  );
};
export default HomePage;
