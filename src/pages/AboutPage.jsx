import CarouselWithContent from "../components/about/Carosusel";
import CustomerService from "../components/about/CustomerService";
import OurStory from "../components/about/OurStory";
import ProfitSection from "../components/about/ProfitSection";
import { BlockLevelBreadcrumbs } from "../components/ui/BlockLevelBreadcrumbs";

const AboutPage = () => {
  return (
    <div className=" container my-4  flex flex-col gap-32 font-poppins  lg:my-16   ">
      <BlockLevelBreadcrumbs />

      <OurStory />

      <ProfitSection />
      <CarouselWithContent />
      <CustomerService />
    </div>
  );
};

export default AboutPage;
