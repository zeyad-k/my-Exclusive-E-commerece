import { useContext } from "react";
// import CarouselWithContent from "../components/about/Carosusel";
// import CustomerService from "../components/about/CustomerService";
// import OurStory from "../components/about/OurStory";
// import ProfitSection from "../components/about/ProfitSection";
import { BlockLevelBreadcrumbs } from "../components/ui/BlockLevelBreadcrumbs";
import { AuthContext } from "../context/Auth";
import UserForm from "../components/ui/UserForm";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  //   console.log(user);

  return (
    <div className=" container my-4  flex flex-col gap-20 font-poppins  lg:my-10   ">
      <div className="flex justify-between">
        <BlockLevelBreadcrumbs />
        {user && (
          <h2 className="flex items-center  gap-1 text-center text-sm font-normal">
            Welcome!
            <span className=" text-main-active-color">{user.displayName}</span>
          </h2>
        )}
      </div>
      <div>
        <UserForm />
      </div>

      {/* <OurStory />

      <ProfitSection />
      <CarouselWithContent />
      <CustomerService /> */}
    </div>
  );
};

export default ProfilePage;
