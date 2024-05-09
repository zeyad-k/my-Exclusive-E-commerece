import { Outlet } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <main className="border-t-0.5   border-[#b3b3b3]">
        <div className="content  mx-auto   max-w-[1200px] ">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
