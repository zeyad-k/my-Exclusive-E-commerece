import { Outlet } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
